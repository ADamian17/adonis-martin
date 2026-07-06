import { Logo } from '@/components/Logo'
import type { MenuLogo } from '@/store/menus'
import { MenuLink } from '@/ui/MenuLink'

type Props = {
  logo: MenuLogo
  imageClassName?: string
}

/**
 * Brand logo linking to the configured url (home by default): renders the Builder logo
 * image when one is set, otherwise falls back to the styled text wordmark.
 */
export const BrandLogo = ({ logo, imageClassName = 'h-9 w-auto' }: Props) => (
  <MenuLink url={logo.url} className="inline-flex no-underline whitespace-nowrap">
    {logo.image ? <img src={logo.image} alt={logo.alt} className={imageClassName} /> : <Logo />}
  </MenuLink>
)
