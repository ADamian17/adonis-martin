import clsx from 'clsx'
import { Mail, MapPin, Phone } from 'lucide-react'

import { useSiteSettings } from '@/store/siteSettings'
import { FooterColumn } from './FooterColumn'
import { footerStyles } from './footer-styles'

const ICON_PROPS = { size: 18, className: 'shrink-0 text-accent' } as const

/** Contact details column, sourced from the Builder `site-settings` entry. */
export const FooterContact = () => {
  const { contact } = useSiteSettings()

  return (
    <FooterColumn title="Get in touch">
      <address className={clsx(footerStyles.columnList, 'not-italic')}>
        <a href={contact.emailHref} className={footerStyles.contactLink}>
          <Mail {...ICON_PROPS} />
          {contact.email}
        </a>
        <a href={contact.phoneHref} className={footerStyles.contactLink}>
          <Phone {...ICON_PROPS} />
          {contact.phone}
        </a>
        <span className={footerStyles.contactItem}>
          <MapPin {...ICON_PROPS} />
          {contact.location}
        </span>
      </address>
    </FooterColumn>
  )
}
