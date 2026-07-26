import { snapshot } from 'valtio'

import { type Menus, menusStore } from './menus'
import { type SiteSettings, siteSettingsStore } from './siteSettings'

export interface StoreSnapshot {
  menus: Menus
  siteSettings: SiteSettings
}

/** Plain, serialisable copy of the stores for the SSR loader payload. */
export const snapshotStores = (): StoreSnapshot => ({
  menus: structuredClone(snapshot(menusStore)) as Menus,
  siteSettings: structuredClone(snapshot(siteSettingsStore)) as SiteSettings,
})

let isHydrated = false

/**
 * Re-applies the server's store snapshot on the client, once, before first paint.
 *
 * The valtio stores are module singletons and do not cross the SSR boundary: the
 * client starts from empty defaults, so without this, hydration wipes the
 * server-rendered nav and footer. Guarded because it runs during render —
 * repeating it would notify subscribers on every pass.
 */
export const hydrateStores = ({ menus, siteSettings }: StoreSnapshot) => {
  if (isHydrated) return

  isHydrated = true
  Object.assign(menusStore, menus)
  Object.assign(siteSettingsStore, siteSettings)
}
