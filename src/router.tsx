import { QueryClient } from '@tanstack/react-query'
import { createRouter } from '@tanstack/react-router'

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
 */
export const getRouter = () => {
  const queryClient = new QueryClient()

  return createRouter({
    routeTree,
    context: { queryClient },
    defaultPreload: 'intent',
    defaultPreloadDelay: 50,
    scrollRestoration: true,
  })
}
