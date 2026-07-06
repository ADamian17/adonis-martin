import type { MenuItem } from '.'

/** Raw nav item as stored on a Builder `menu` entry — either inline or a resolved reference. */
type RawMenuItem = {
  label?: string
  url?: string
  target?: string
  ariaLabel?: string
  value?: { data?: RawMenuItem }
}

type RawMenuWrapper = { menuItem?: RawMenuItem }

/** Raw shape of a Builder `menu` content entry. */
export type RawMenuEntry = {
  name?: string
  data?: { menuItems?: RawMenuWrapper[] }
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
