import { QueryClient } from '@tanstack/react-query'
import { createRouter } from '@tanstack/react-router'
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query'

import { routeTree } from './routeTree.gen'

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}

export interface RouterContext {
  queryClient: QueryClient
}

/**
 * Builds the router for a single render.
 *
 * The `QueryClient` is created here rather than at module scope: prerendering
 * renders every page in one process, so a shared client would leak one page's
 * cache into the next. Start calls this per request and per prerendered page.
 *
 * `setupRouterSsrQueryIntegration` dehydrates that client into the SSR response
 * and rehydrates it on the client, so anything a loader prefetches is already in
 * the static HTML instead of being refetched after mount.
 */
export const getRouter = () => {
  const queryClient = new QueryClient()

  const router = createRouter({
    routeTree,
    context: { queryClient },
    defaultPreload: 'intent',
    defaultPreloadDelay: 50,
    scrollRestoration: true,
  })

  setupRouterSsrQueryIntegration({ router, queryClient })

  return router
}
