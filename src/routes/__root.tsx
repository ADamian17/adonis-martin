import { builder } from '@builder.io/react'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

export const RootLayout = () => (
  <>
    <Navbar />

    <main className="max-w-[1580px] mx-auto">
      <Outlet />
    </main>
    
    <Footer />
  </>
)

builder.init(import.meta.env.VITE_BUILDER_API_KEY ?? '')

export const Route = createRootRouteWithContext()({
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'TanStack Router Dashboard — provider dashboard demo',
      },
      { title: 'TanStack Router Dashboard' },
    ],
  }),
  errorComponent: () => <div>Root Error</div>,
  component: RootLayout,
})
