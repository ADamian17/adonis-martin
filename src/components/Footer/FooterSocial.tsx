import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons'
import { useSiteSettings } from '@/store/siteSettings'
import { FooterColumn } from './FooterColumn'
import { footerStyles } from './footer-styles'

/** Social profile column: inline icon + label links, sourced from `site-settings`. */
export const FooterSocial = () => {
  const { social } = useSiteSettings()

  const links = [
    { Icon: LinkedinIcon, href: social.linkedinUrl, label: 'LinkedIn' },
    { Icon: GithubIcon, href: social.githubUrl, label: 'GitHub' },
  ]

  return (
    <FooterColumn title="Follow">
      <div className={footerStyles.columnList}>
        {links.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={footerStyles.socialLink}
          >
            <Icon size={18} />
            {label}
          </a>
        ))}
      </div>
    </FooterColumn>
  )
}
