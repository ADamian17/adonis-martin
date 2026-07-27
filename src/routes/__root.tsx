import { builder } from '@builder.io/react'
import { QueryClientProvider } from '@tanstack/react-query'
import {
  createRootRouteWithContext,
  HeadContent,
  ScriptOnce,
  Scripts,
} from '@tanstack/react-router'
import type { ReactNode } from 'react'

import RootLayout from '@/layouts/RootLayout'
import type { RouterContext } from '@/router'
import { hydrateStores, snapshotStores } from '@/store/hydrate-stores'
import { loadMenus } from '@/store/menus'
import { loadSiteSettings } from '@/store/siteSettings'
import { THEME_INIT_SCRIPT } from '@/utils/theme'

import '@/assets/styles/main.css'

builder.init(import.meta.env.VITE_BUILDER_API_KEY ?? '')

const FONT_HREF =
  'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap'

/**
 * The document shell, replacing index.html. Start owns the whole document, so
 * what used to be static markup is declared in `head` below and rendered by
 * `<HeadContent />`.
 */
const RootDocument = ({ children }: { children: ReactNode }) => (
  // The theme script sets `className` on <html> before React hydrates.
  <html lang="en" suppressHydrationWarning>
    <head>
      <HeadContent />
    </head>
    <body>
      <ScriptOnce children={THEME_INIT_SCRIPT} />
      {children}
      <Scripts />
    </body>
  </html>
)

/**
 * Applies the server's store snapshot before rendering the layout, so the
 * client's empty singletons do not wipe the server-rendered nav and footer on
 * hydration.
 *
 * The QueryClient comes from router context rather than module scope, since
 * prerendering renders every page in a single process.
 */
const RootComponent = () => {
  hydrateStores(Route.useLoaderData())

  const { queryClient } = Route.useRouteContext()

  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout />
    </QueryClientProvider>
  )
}

export const Route = createRootRouteWithContext<RouterContext>()({
  // A loader, not `beforeLoad`: only loader data is dehydrated into the SSR
  // payload, and the valtio stores themselves do not cross to the client.
  loader: async () => {
    await Promise.all([loadSiteSettings(), loadMenus()])

    return snapshotStores()
  },
  head: () => ({
    meta: [
      { charSet: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    ],
    links: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: '' },
      { rel: 'stylesheet', href: FONT_HREF },
    ],
  }),
  shellComponent: RootDocument,
  errorComponent: () => <div>Root Error</div>,
  component: RootComponent,
})
