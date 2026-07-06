import { builder } from '@builder.io/react'
import { proxy, useSnapshot } from 'valtio'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { type RawMenuEntry, toMenuItems } from './menus-utils'

/** A single navigation link sourced from a Builder `menu` entry. */
export type MenuItem = {
  label: string
  url: string
  target: string
  ariaLabel?: string
}

/** Navigation menus, keyed by placement. */
export type Menus = {
  mainNav: MenuItem[]
  footerNav: MenuItem[]
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

/**
 * Fallback menus rendered until the Builder `menu` entries are fetched (or if the fetch
 * fails / an entry is missing). Acts as the single source of fallback navigation.
 */
export const MENUS_DEFAULTS: Menus = {
  mainNav: DEFAULT_ITEMS,
  footerNav: DEFAULT_ITEMS,
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

/**
 * Fetches the Builder `menu` entries and hydrates {@link menusStore} by placement.
 * Each placement keeps its defaults if its entry is missing or empty. Errors are logged
 * and swallowed so the store keeps its defaults.
 */
export const loadMenus = async () => {
  try {
    const entries = (await builder.getAll(BUILDER_IO_MODELS.MENU, { limit: 20 })) as RawMenuEntry[]

    const mainNav = toMenuItems(entries.find((entry) => entry.name === MENU_NAMES.mainNav))
    const footerNav = toMenuItems(entries.find((entry) => entry.name === MENU_NAMES.footerNav))

    if (mainNav.length) menusStore.mainNav = mainNav
    if (footerNav.length) menusStore.footerNav = footerNav
  } catch (error) {
    console.error('Error fetching menu content', error)
  }
}
