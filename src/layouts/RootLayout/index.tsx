import { Outlet } from '@tanstack/react-router'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

const RootLayout = () => (
  <>
    <Navbar />

    <main className="max-w-[1580px] mx-auto">
      <Outlet />
    </main>

    <Footer />
  </>
)

export default RootLayout
