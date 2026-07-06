import { builder } from '@builder.io/react'
import { createRootRouteWithContext } from '@tanstack/react-router'

import RootLayout from '@/layouts/RootLayout'
import { loadMenus } from '@/store/menus'
import { loadSiteSettings } from '@/store/siteSettings'

builder.init(import.meta.env.VITE_BUILDER_API_KEY ?? '')

export const Route = createRootRouteWithContext()({
  beforeLoad: async () => {
    await Promise.all([loadSiteSettings(), loadMenus()])
  },
  errorComponent: () => <div>Root Error</div>,
  component: RootLayout,
})
