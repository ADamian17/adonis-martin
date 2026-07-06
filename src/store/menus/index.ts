import { builder } from '@builder.io/react'
import { proxy, useSnapshot } from 'valtio'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { type RawMenuEntry, toLogo, toMenuItems } from './menus-utils'

/** A single navigation link sourced from a Builder `nav-item` reference. */
export type MenuItem = {
  label: string
  url: string
  target: string
  ariaLabel?: string
}

/** Brand logo config for a menu placement. `image` is a Builder asset URL; empty means text fallback. */
export type MenuLogo = {
  image: string
  alt: string
  url: string
}

/** A navigation placement: its brand logo plus its ordered links. */
export type Menu = {
  logo: MenuLogo
  items: MenuItem[]
}

/** Navigation menus, keyed by placement. */
export type Menus = {
  mainNav: Menu
  footerNav: Menu
}

/** Builder `menu` entry names that drive each placement. */
const MENU_NAMES = {
  mainNav: 'Main Nav',
  footerNav: 'Footer Nav',
} as const

const DEFAULT_ITEMS: MenuItem[] = [
  { label: 'About Me', url: '/about-me', target: '_self' },
  { label: 'Portfolio', url: '/portfolio', target: '_self' },
  { label: 'Contact Me', url: '/contact-me', target: '_self' },
]

const DEFAULT_LOGO: MenuLogo = { image: '', alt: 'Adonis D. Martin', url: '/' }

/**
 * Fallback menus rendered until the Builder `menu` entries are fetched (or if the fetch
 * fails / an entry is missing). Acts as the single source of fallback navigation.
 */
export const MENUS_DEFAULTS: Menus = {
  mainNav: { logo: DEFAULT_LOGO, items: DEFAULT_ITEMS },
  footerNav: { logo: DEFAULT_LOGO, items: DEFAULT_ITEMS },
}

/**
 * Global, reactive store consumed via `useSnapshot` in Navbar and Footer.
 * Seeded with a deep clone of the defaults so hydration never mutates the exported constant.
 */
export const menusStore = proxy<Menus>(structuredClone(MENUS_DEFAULTS))

/**
 * React hook returning a reactive, immutable snapshot of {@link menusStore}.
 *
 * @returns The current menus snapshot (`mainNav` and `footerNav`).
 */
export const useMenus = () => useSnapshot(menusStore)

/** Builds a {@link Menu} from a raw entry, keeping default items when the entry has none. */
const buildMenu = (entry: RawMenuEntry): Menu => {
  const items = toMenuItems(entry)

  return {
    logo: toLogo(entry, DEFAULT_LOGO),
    items: items.length ? items : DEFAULT_ITEMS,
  }
}

/**
 * Fetches the Builder `menu` entries (resolving their `nav-item` references) and hydrates
 * {@link menusStore} by placement. Each placement keeps its defaults if its entry is missing.
 * Errors are logged and swallowed so the store keeps its defaults.
 */
export const loadMenus = async () => {
  try {
    const entries = (await builder.getAll(BUILDER_IO_MODELS.MENU, {
      limit: 20,
      includeRefs: true,
    })) as RawMenuEntry[]

    const mainNav = entries.find((entry) => entry.name === MENU_NAMES.mainNav)
    const footerNav = entries.find((entry) => entry.name === MENU_NAMES.footerNav)

    if (mainNav) menusStore.mainNav = buildMenu(mainNav)
    if (footerNav) menusStore.footerNav = buildMenu(footerNav)
  } catch (error) {
    console.error('Error fetching menu content', error)
  }
}
