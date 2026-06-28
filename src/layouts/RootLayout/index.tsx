import { Outlet } from '@tanstack/react-router'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import BuilderSection from '../BuilderSection'

const RootLayout = () => (
  <>
    <Navbar />

    <BuilderSection model="hero" />

    <main className="max-w-[1596px] mx-auto">
      <Outlet />
    </main>

    <Footer />
  </>
)

export default RootLayout
