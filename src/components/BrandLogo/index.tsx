import { Logo } from '@/components/Logo'
import type { MenuLogo } from '@/store/menus'
import { MenuLink } from '@/ui/MenuLink'

type Props = {
  logo: MenuLogo
  imageClassName?: string
}

type LogoMarkProps = {
  logo: MenuLogo
  imageClassName: string
}

/**
 * The logo mark itself: the Builder logo image when set (swapped for `logo.mobileImage` below
 * the `md` breakpoint via `<picture>` so only the matching source loads), else the text wordmark.
 */
const LogoMark = ({ logo, imageClassName }: LogoMarkProps) => {
  if (!logo.image) return <Logo />

  if (!logo.mobileImage) {
    return <img src={logo.image} alt={logo.alt} className={imageClassName} />
  }

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={logo.image} />
      <img src={logo.mobileImage} alt={logo.alt} className={imageClassName} />
    </picture>
  )
}

/**
 * Brand logo linking to the configured url (home by default). Renders {@link LogoMark},
 * showing `logo.mobileImage` (an initials-only mark) on small screens when the placement sets one.
 */
export const BrandLogo = ({ logo, imageClassName = 'h-9 w-auto' }: Props) => (
  <MenuLink url={logo.url} className="inline-flex no-underline whitespace-nowrap">
    <LogoMark logo={logo} imageClassName={imageClassName} />
  </MenuLink>
)
