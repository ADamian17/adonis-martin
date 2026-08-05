import { BrandLogo } from '@/components/BrandLogo'
import { useMenus } from '@/store/menus'
import { useSiteSettings } from '@/store/siteSettings'
import { FooterBottomBar } from './FooterBottomBar'
import { FooterContact } from './FooterContact'
import { FooterNav } from './FooterNav'
import { FooterSocial } from './FooterSocial'

/**
 * Site footer: a brand column beside the Navigate / Get in touch / Follow link columns,
 * closed by the copyright rule. Copy comes from the Builder `Footer Nav` menu and the
 * `site-settings` entry.
 */
export const Footer = () => {
  const { footerNav } = useMenus()
  const { brand } = useSiteSettings()

  return (
    <footer
      id="contact"
      className="mx-auto max-w-[1920px] border-t border-border"
      style={{ padding: '88px clamp(20px, 8.4vw, 162px) 44px' }}
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))] items-start gap-[clamp(48px,6vw,120px)]">
        <div>
          <BrandLogo logo={footerNav.logo} />
          <p className="mt-5.5 max-w-85 text-[16px] leading-[1.65] text-body">{brand.tagline}</p>
        </div>

        <div className="flex flex-wrap items-start justify-between gap-x-[clamp(40px,5vw,64px)] gap-y-[clamp(28px,3vw,56px)]">
          <FooterNav items={footerNav.items} />
          <FooterContact />
          <FooterSocial />
        </div>
      </div>

      <FooterBottomBar />
    </footer>
  )
}
