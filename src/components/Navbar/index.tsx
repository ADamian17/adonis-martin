import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button as AriaButton } from 'react-aria-components'

import { BrandLogo } from '@/components/BrandLogo'
import { ThemeToggle } from '@/components/ThemeToggle'
import { useMenus } from '@/store/menus'
import { NavLink } from './NavLink'

export const Navbar = () => {
  const { mainNav } = useMenus()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-nav"
      style={{
        padding: '20px clamp(20px, 8.4vw, 162px)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <BrandLogo logo={mainNav.logo} />

      <div className="flex items-center gap-3.5">
        <ul className="hidden md:flex items-center gap-1">
          {mainNav.items.map((link) => (
            <li key={link.url}>
              <NavLink {...link} />
            </li>
          ))}
        </ul>

        <ThemeToggle />

        <AriaButton
          className="md:hidden p-2 text-heading"
          onPress={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </AriaButton>
      </div>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-beige border-b border-border flex flex-col py-2 md:hidden">
          {mainNav.items.map((link) => (
            <NavLink key={link.url} {...link} mobile onClick={close} />
          ))}
        </div>
      )}
    </nav>
  )
}
