import { Outlet } from '@tanstack/react-router'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

// HeadContent moved to the document shell in __root.tsx: with Start the head is
// a real <head>, not markup rendered inside the body.
const RootLayout = () => (
  <>
    <Navbar />

    <main>
      <Outlet />
    </main>

    <Footer />
  </>
)

export default RootLayout
