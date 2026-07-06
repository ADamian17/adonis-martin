import { builder } from '@builder.io/react'
import { createRootRouteWithContext } from '@tanstack/react-router'

import RootLayout from '@/layouts/RootLayout'
import { loadSiteSettings } from '@/store/siteSettings'

builder.init(import.meta.env.VITE_BUILDER_API_KEY ?? '')

export const Route = createRootRouteWithContext()({
  beforeLoad: async () => {
    await loadSiteSettings()
  },
  errorComponent: () => <div>Root Error</div>,
  component: RootLayout,
})
