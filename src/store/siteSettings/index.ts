import { builder } from '@builder.io/react'
import { proxy, useSnapshot } from 'valtio'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { hydrateGroup } from './site-settings-utils'

/** Contact details surfaced in the footer and contact page. */
export type ContactSettings = {
  email: string
  emailHref: string
  phone: string
  phoneHref: string
  location: string
}

/** Social profile URLs. */
export type SocialSettings = {
  linkedinUrl: string
  githubUrl: string
}

/** Site-wide settings sourced from the Builder `site-settings` model, grouped by purpose. */
export type SiteSettings = {
  contact: ContactSettings
  social: SocialSettings
}

/**
 * Default values rendered until the Builder `site-settings` entry is fetched (or if the
 * fetch fails / the entry does not exist yet). Acts as the single source of fallback data.
 */
export const SITE_SETTINGS_DEFAULTS: SiteSettings = {
  contact: {
    email: 'adonismartin90@gmail.com',
    emailHref: 'mailto:adonismartin90@gmail.com',
    phone: '+1 (510) 987-6466',
    phoneHref: 'tel:+15109876466',
    location: 'Remote · Available Worldwide',
  },
  social: {
    linkedinUrl: 'https://www.linkedin.com/in/adonismartin/',
    githubUrl: 'https://github.com/ADamian17',
  },
}

/**
 * Global, reactive store consumed via `useSnapshot` in components.
 *
 * Seeded with a deep clone of the defaults: valtio writes through to the underlying
 * nested objects, so passing `SITE_SETTINGS_DEFAULTS` (or a shallow copy) directly would
 * let hydration mutate the exported constant. Cloning keeps it a pristine fallback baseline.
 */
export const siteSettingsStore = proxy<SiteSettings>(structuredClone(SITE_SETTINGS_DEFAULTS))

/**
 * React hook returning a reactive, immutable snapshot of {@link siteSettingsStore}.
 * Components re-render when any consumed field changes.
 *
 * @returns The current site settings snapshot (`contact` and `social` groups).
 */
export const useSiteSettings = () => useSnapshot(siteSettingsStore)

/**
 * Fetches the Builder `site-settings` singleton and hydrates {@link siteSettingsStore}.
 * Errors are logged and swallowed so the store keeps its defaults.
 */
export const loadSiteSettings = async () => {
  try {
    const entry = await builder.get(BUILDER_IO_MODELS.SITE_SETTINGS).promise()
    const data = entry?.data

    if (data) {
      hydrateGroup(siteSettingsStore.contact, data.contact)
      hydrateGroup(siteSettingsStore.social, data.social)
    }
  } catch (error) {
    console.error('Error fetching site-settings content', error)
  }
}
