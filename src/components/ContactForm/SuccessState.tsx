type Props = {
  sentName: string
  sentEmail: string
  onReset: () => void
}

const circleStyle = {
  background: 'linear-gradient(135deg,#9a5cff,#681aff)',
  boxShadow: 'inset 0 0 14px 4px rgba(255,255,255,0.45)',
}

export const SuccessState = ({ sentName, sentEmail, onReset }: Props) => (
  <div className="flex flex-col items-center text-center gap-5 py-10 px-2.5">
    <div
      className="w-[72px] h-[72px] flex items-center justify-center rounded-full"
      style={circleStyle}
    >
      <svg
        aria-hidden="true"
        width="38"
        height="38"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </div>
    <h3 className="m-0 font-semibold text-[24px] text-heading">Thanks, {sentName}!</h3>
    <p className="m-0 font-normal text-[16px] leading-[1.6] text-body" style={{ maxWidth: '42ch' }}>
      Your message is on its way. I&apos;ll reply to{' '}
      <strong className="text-heading">{sentEmail}</strong> within one business day.
    </p>
    <button
      type="button"
      onClick={onReset}
      className="mt-1.5 cursor-pointer px-6 py-[14px] rounded-lg border border-[#e4e0d8] bg-white font-medium text-[16px] text-[#333] hover:bg-card-alt transition-colors"
    >
      Send another message
    </button>
  </div>
)
