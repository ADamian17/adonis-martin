import { Builder } from '@builder.io/react'
import { Mail, MapPin, Phone } from 'lucide-react'
import type { ComponentType } from 'react'

import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { useSiteSettings } from '@/store/siteSettings'
import { IconLink } from '@/ui/IconLink'

type ContactDetail = {
  Icon: ComponentType<{ size: number; stroke?: string; strokeWidth?: number }>
  sublabel: string
  value: string
  href: string | null
}

type Props = {
  availabilityStatus: string
  availabilitySubtext: string
  withAvailabilityStatus: boolean
}

export const ContactInfo = ({
  availabilityStatus,
  availabilitySubtext,
  withAvailabilityStatus,
}: Props) => {
  const { contact, social } = useSiteSettings()

  const contactDetails: ContactDetail[] = [
    { Icon: Mail, sublabel: 'Email', value: contact.email, href: contact.emailHref },
    { Icon: Phone, sublabel: 'Phone', value: contact.phone, href: contact.phoneHref },
    { Icon: MapPin, sublabel: 'Location', value: contact.location, href: null },
  ]

  const socialLinks = [
    { Icon: LinkedinIcon, href: social.linkedinUrl, label: 'LinkedIn' },
    { Icon: GithubIcon, href: social.githubUrl, label: 'GitHub' },
  ]

  return (
    <div className="flex flex-col gap-7.5">
      {/* Get in touch card — purple fill */}
      <div
        className="rounded-xl bg-purple-fill border border-purple-border flex flex-col gap-7"
        style={{ padding: '50px' }}
      >
        <h2 className="m-0 font-semibold text-[24px] text-heading">Get in touch</h2>

        {contactDetails.map(({ Icon, sublabel, value, href }) => (
          <div key={sublabel} className="flex items-center gap-4">
            <div className="flex-none w-12 h-12 flex items-center justify-center rounded-lg bg-white">
              <Icon size={22} stroke="var(--color-accent)" strokeWidth={1.8} />
            </div>
            <div>
              <div className="text-[14px] text-faint">{sublabel}</div>
              {href ? (
                <a
                  href={href}
                  className="font-medium text-[17px] text-heading no-underline hover:text-accent transition-colors"
                >
                  {value}
                </a>
              ) : (
                <div className="font-medium text-[17px] text-heading">{value}</div>
              )}
            </div>
          </div>
        ))}

        {/* Social icons */}
        <div className="flex items-center gap-3.5 pt-1.5">
          {socialLinks.map(({ Icon, href, label }) => (
            <IconLink
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon size={20} />
            </IconLink>
          ))}
        </div>
      </div>

      {/* Availability card */}
      {withAvailabilityStatus && (
        <div
          className="flex items-center gap-3.5 rounded-xl bg-card-warm"
          style={{ padding: '24px 30px' }}
        >
          <span
            className="flex-none w-3 h-3 rounded-full"
            style={{
              background: 'var(--color-success)',
              boxShadow: '0 0 0 4px rgba(31,138,91,0.15)',
            }}
          />
          <div>
            <div className="font-semibold text-[16px] text-heading">{availabilityStatus}</div>
            <div className="font-normal text-[15px] text-body">{availabilitySubtext}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export const registerContactInfo = () => {
  Builder.registerComponent(ContactInfo, {
    name: 'ContactInfo',
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
