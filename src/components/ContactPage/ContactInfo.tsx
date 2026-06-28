import { Builder } from '@builder.io/react'
import { Mail, MapPin, Phone } from 'lucide-react'
import type { ComponentType } from 'react'

import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/SocialIcons'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'

type ContactDetail = {
  Icon: ComponentType<{ size: number; stroke?: string; strokeWidth?: number }>
  sublabel: string
  label: string
  value: string
  href: string | null
}

const contactDetails: ContactDetail[] = [
  {
    Icon: Mail,
    sublabel: 'Email',
    label: 'Email',
    value: 'adonisdesuvikdo@gmail.com',
    href: 'mailto:adonisdesuvikdo@gmail.com',
  },
  {
    Icon: Phone,
    sublabel: 'Phone',
    label: 'Phone',
    value: '+1 (555) 012-3456',
    href: 'tel:+15550123456',
  },
  {
    Icon: MapPin,
    sublabel: 'Location',
    label: 'Location',
    value: 'Remote · Available Worldwide',
    href: null,
  },
]

const socialLinks = [
  { Icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
  { Icon: TwitterIcon, href: 'https://twitter.com', label: 'Twitter/X' },
  { Icon: GithubIcon, href: 'https://github.com', label: 'GitHub' },
]

export const ContactInfo = () => (
  <div className="flex flex-col gap-[30px]">
    {/* Get in touch card — purple fill */}
    <div
      className="rounded-xl bg-purple-fill border border-purple-border flex flex-col gap-7"
      style={{ padding: '50px' }}
    >
      <h2 className="m-0 font-semibold text-[24px] text-heading">Get in touch</h2>

      {contactDetails.map(({ Icon, sublabel, value, href }) => (
        <div key={sublabel} className="flex items-center gap-4">
          <div className="flex-none w-12 h-12 flex items-center justify-center rounded-lg bg-white">
            <Icon size={22} stroke="#681aff" strokeWidth={1.8} />
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
      <div className="flex items-center gap-[14px] pt-1.5">
        {socialLinks.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center text-white hover:bg-accent/90 transition-colors"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </div>

    {/* Availability card */}
    <div
      className="flex items-center gap-[14px] rounded-xl bg-card-warm"
      style={{ padding: '24px 30px' }}
    >
      <span
        className="flex-none w-3 h-3 rounded-full"
        style={{ background: '#1f8a5b', boxShadow: '0 0 0 4px rgba(31,138,91,0.15)' }}
      />
      <div>
        <div className="font-semibold text-[16px] text-heading">
          Currently available for new projects
        </div>
        <div className="font-normal text-[15px] text-body">Booking work starting July 2026</div>
      </div>
    </div>
  </div>
)

export const registerContactInfo = () => {
  Builder.registerComponent(ContactInfo, {
    name: 'ContactInfo',
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
