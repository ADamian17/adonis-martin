import { Link, useRouterState } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import { Logo } from '@/components/Logo'

type NavLinkItem = { label: string; to: string }

const navLinks: NavLinkItem[] = [
  { label: 'About Me', to: '/about-me' },
  { label: 'Contact Me', to: '/contact-me' },
  { label: 'Portfolio', to: '/portfolio' },
]

type NavLinkProps = NavLinkItem & { mobile?: boolean; onClick?: () => void }

const NavLink = ({ label, to, mobile = false, onClick }: NavLinkProps) => {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const isActive = pathname === to
  const base = `font-medium text-[18px] rounded-lg whitespace-nowrap ${mobile ? 'px-6 py-3 block' : 'px-6 py-3.5'}`
  const cls = isActive
    ? `${base} bg-card-ivory text-heading`
    : `${base} text-[#333] hover:bg-card-ivory hover:text-heading transition-colors`
  return (
    <Link to={to} onClick={onClick} className={cls}>
      {label}
    </Link>
  )
}

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between border-b border-border"
      style={{
        padding: '20px clamp(20px, 8.4vw, 162px)',
        background: 'rgba(238,235,229,0.86)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <Link to={"/$".replace('$', '')} className="no-underline whitespace-nowrap">
        <Logo />
      </Link>

      <ul className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink {...link} />
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="md:hidden p-2 text-heading"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-beige border-b border-border flex flex-col py-2 md:hidden">
          {navLinks.map((link) => (
            <NavLink key={link.to} {...link} mobile onClick={close} />
          ))}
        </div>
      )}
    </nav>
  )
}
