import type { MenuItem, MenuLogo } from '.'

/** Raw nav item as stored on a Builder `menu` entry — either inline or a resolved reference. */
type RawMenuItem = {
  label?: string
  url?: string
  target?: string
  ariaLabel?: string
  value?: { data?: RawMenuItem }
}

type RawMenuWrapper = { menuItem?: RawMenuItem }

type RawLogo = { image?: string; mobileImage?: string; alt?: string; url?: string }

/** Raw shape of a Builder `menu` content entry. */
export type RawMenuEntry = {
  name?: string
  data?: {
    logo?: RawLogo
    menuItems?: RawMenuWrapper[]
  }
}

/**
 * Flattens a Builder `menu` entry's `menuItems` into a clean {@link MenuItem} list.
 * Tolerates both inline item data and resolved `nav-item` references (`value.data`),
 * and drops entries missing a label or url.
 */
export const toMenuItems = (entry?: RawMenuEntry): MenuItem[] => {
  const wrappers = entry?.data?.menuItems

  if (!Array.isArray(wrappers)) return []

  return wrappers
    .map(({ menuItem }): MenuItem => {
      const item = menuItem?.value?.data ?? menuItem

      return {
        label: item?.label ?? '',
        url: item?.url ?? '',
        target: item?.target ?? '_self',
        ariaLabel: item?.ariaLabel,
      }
    })
    .filter((item) => item.label !== '' && item.url !== '')
}

/**
 * Reads a Builder `menu` entry's `logo` object, falling back to `fallback` for any
 * unset field so the brand mark always has a link target and alt text.
 */
export const toLogo = (entry: RawMenuEntry | undefined, fallback: MenuLogo): MenuLogo => {
  const raw = entry?.data?.logo

  return {
    image: raw?.image ?? fallback.image,
    mobileImage: raw?.mobileImage ?? fallback.mobileImage,
    alt: raw?.alt || fallback.alt,
    url: raw?.url || fallback.url,
  }
}
