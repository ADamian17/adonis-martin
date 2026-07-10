import { HeadContent, Outlet } from '@tanstack/react-router'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

const RootLayout = () => (
  <>
    <HeadContent />
    <Navbar />

    <main>
      <Outlet />
    </main>

    <Footer />
  </>
)

export default RootLayout
