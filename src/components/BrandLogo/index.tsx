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

type LogoImageProps = {
  desktop: string
  mobile?: string
  alt: string
  className: string
}

/**
 * One themed mark: `mobile` swaps in below the `md` breakpoint via `<picture>`, so
 * only the matching source is fetched.
 */
const LogoImage = ({ desktop, mobile, alt, className }: LogoImageProps) => {
  if (!mobile) return <img src={desktop} alt={alt} className={className} />

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktop} />
      <img src={mobile} alt={alt} className={className} />
    </picture>
  )
}

/**
 * The logo mark itself: the Builder logo image when set, else the text wordmark.
 *
 * When a light-on-dark variant exists, both marks are rendered and swapped by the
 * `dark:` variant rather than by state — the page is prerendered, so the theme is
 * only known in the browser and a state-driven swap would flash the wrong mark.
 */
const LogoMark = ({ logo, imageClassName }: LogoMarkProps) => {
  if (!logo.image) return <Logo />

  if (!logo.imageDark) {
    return (
      <LogoImage
        desktop={logo.image}
        mobile={logo.mobileImage}
        alt={logo.alt}
        className={imageClassName}
      />
    )
  }

  return (
    <>
      <LogoImage
        desktop={logo.image}
        mobile={logo.mobileImage}
        alt={logo.alt}
        className={`${imageClassName} dark:hidden`}
      />
      <LogoImage
        desktop={logo.imageDark}
        mobile={logo.mobileImageDark ?? logo.imageDark}
        alt=""
        className={`${imageClassName} hidden dark:block`}
      />
    </>
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
