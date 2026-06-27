import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { label: 'About Me', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact Me', href: '#contact' },
]

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between border-b border-border"
      style={{
        padding: '20px clamp(20px, 8.4vw, 162px)',
        background: 'rgba(238,235,229,0.86)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <a href="#home" className="text-accent font-semibold text-2xl whitespace-nowrap">
        Adonis D. Martin.
      </a>

      <ul className="hidden md:flex items-center gap-1">
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className="font-medium text-[18px] text-[#333] px-5 py-3.5 rounded-lg hover:bg-card-ivory hover:text-heading transition-colors whitespace-nowrap"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="md:hidden p-2 text-heading"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-beige border-b border-border flex flex-col py-2 md:hidden">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-medium text-[18px] text-[#333] px-6 py-3 hover:bg-card-ivory"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
