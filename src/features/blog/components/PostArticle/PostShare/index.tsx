import { Check, Link2 } from 'lucide-react'
import { useState } from 'react'
import { Button as AriaButton } from 'react-aria-components'

type PostShareProps = { title: string }

const buttonClassName =
  'flex size-10.5 cursor-pointer items-center justify-center rounded-lg border border-border-warm bg-card-raised text-muted transition-colors data-[hovered]:border-accent data-[hovered]:text-accent data-[focus-visible]:outline-2 data-[focus-visible]:outline-accent data-[focus-visible]:outline-offset-2'

/** X's mark is not in lucide, so it stays inline. */
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <title>X</title>
    <path d="M18.9 2H22l-7.5 8.6L23 22h-6.9l-5.4-7-6.2 7H1.4l8-9.2L1 2h7l4.9 6.5L18.9 2zm-2.4 18h1.9L7.6 4H5.6l10.9 16z" />
  </svg>
)

export const PostShare = ({ title }: PostShareProps) => {
  const [copied, setCopied] = useState(false)

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard access can be denied; the address bar still has the URL.
    }
  }

  const shareUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(typeof window === 'undefined' ? '' : window.location.href)}`

  return (
    <div className="flex gap-2.5">
      <a
        href={shareUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className={buttonClassName}
      >
        <XIcon />
      </a>

      <AriaButton onPress={copyLink} aria-label="Copy link" className={buttonClassName}>
        {copied ? <Check size={18} aria-hidden="true" /> : <Link2 size={18} aria-hidden="true" />}
      </AriaButton>
    </div>
  )
}
