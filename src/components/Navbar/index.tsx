import { Link, useRouterState } from '@tanstack/react-router'
import clsx from 'clsx'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button as AriaButton } from 'react-aria-components'

import { Logo } from '@/components/Logo'
import { type MenuItem, useMenus } from '@/store/menus'
import { MenuLink } from '@/ui/MenuLink'

type NavLinkProps = MenuItem & { mobile?: boolean; onClick?: () => void }

const NavLink = ({ label, url, target, ariaLabel, mobile = false, onClick }: NavLinkProps) => {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const isActive = pathname === url
  return (
    <MenuLink
      url={url}
      target={target}
      ariaLabel={ariaLabel}
      onClick={onClick}
      className={clsx(
        'font-medium text-[18px] rounded-lg whitespace-nowrap',
        mobile ? 'px-6 py-3 block' : 'px-6 py-3.5',
        isActive
          ? 'bg-card-ivory text-heading'
          : 'text-muted hover:bg-card-ivory hover:text-heading transition-colors',
      )}
    >
      {label}
    </MenuLink>
  )
}

export const Navbar = () => {
  const { mainNav } = useMenus()
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
      <Link to={'/$'.replace('$', '')} className="no-underline whitespace-nowrap">
        <Logo />
      </Link>

      <ul className="hidden md:flex items-center gap-1">
        {mainNav.map((link) => (
          <li key={link.url}>
            <NavLink {...link} />
          </li>
        ))}
      </ul>

      <AriaButton
        className="md:hidden p-2 text-heading"
        onPress={() => setOpen((o) => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </AriaButton>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-beige border-b border-border flex flex-col py-2 md:hidden">
          {mainNav.map((link) => (
            <NavLink key={link.url} {...link} mobile onClick={close} />
          ))}
        </div>
      )}
    </nav>
  )
}
