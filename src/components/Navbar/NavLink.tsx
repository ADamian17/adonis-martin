import { useRouterState } from '@tanstack/react-router'
import clsx from 'clsx'

import type { MenuItem } from '@/store/menus'
import { MenuLink } from '@/ui/MenuLink'

type Props = MenuItem & { mobile?: boolean; onClick?: () => void }

/** A single Navbar link, highlighting the active route; `mobile` switches to the dropdown layout. */
export const NavLink = ({ label, url, target, ariaLabel, mobile = false, onClick }: Props) => {
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
