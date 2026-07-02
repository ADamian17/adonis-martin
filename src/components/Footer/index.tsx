import { Link } from '@tanstack/react-router'
import { Mail, MapPin, Phone } from 'lucide-react'

import { Logo } from '@/components/Logo'
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/SocialIcons'
import { IconLink } from '@/ui/IconLink'

const navLinks = [
  { label: 'About Me', to: '/about-me' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact Me', to: '/contact-me' },
]

const contactItems = [
  { icon: Mail, label: 'adonisdesuvikdo@gmail.com', href: 'mailto:adonisdesuvikdo@gmail.com' },
  { icon: Phone, label: '+1 (555) 012-3456', href: 'tel:+15550123456' },
  { icon: MapPin, label: 'Remote · Available Worldwide', href: null },
]

const socialLinks = [
  { Icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
  { Icon: TwitterIcon, href: 'https://twitter.com', label: 'Twitter/X' },
  { Icon: GithubIcon, href: 'https://github.com', label: 'GitHub' },
]

export const Footer = () => (
  <footer
    id="contact"
    className="border-t border-border"
    style={{ padding: '70px clamp(20px, 8.4vw, 162px) 50px' }}
  >
    {/* Top row */}
    <div className="flex flex-wrap items-center justify-between gap-6 mb-10">
      <Link to={'/$'.replace('$', '')} className="no-underline whitespace-nowrap">
        <Logo />
      </Link>

      <nav className="flex flex-wrap gap-6">
        {navLinks.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className="font-medium text-[17px] text-muted hover:text-heading transition-colors"
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="flex gap-3">
        {socialLinks.map(({ Icon, href, label }) => (
          <IconLink
            key={label}
            size={40}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon size={18} />
          </IconLink>
        ))}
      </div>
    </div>

    {/* Contact row */}
    <div className="flex flex-wrap justify-center gap-[30px] my-10">
      {contactItems.map(({ icon: Icon, label, href }) =>
        href ? (
          <a key={label} href={href} className="hover:text-heading transition-colors">
            <span className="flex items-center gap-2 text-body text-[15px]">
              <Icon size={16} className="text-accent shrink-0" />
              {label}
            </span>
          </a>
        ) : (
          <span key={label} className="flex items-center gap-2 text-body text-[15px]">
            <Icon size={16} className="text-accent shrink-0" />
            {label}
          </span>
        ),
      )}
    </div>

    {/* Copyright */}
    <div className="border-t border-border pt-6 text-center">
      <p className="text-faint text-[15px]">
        Copyright © 2026 Adonis D. Martin. All rights reserved.
      </p>
    </div>
  </footer>
)
