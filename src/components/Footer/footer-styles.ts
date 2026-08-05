import clsx from 'clsx'

const listItem = 'flex items-center gap-3 text-[16px]'
const interactive = 'no-underline transition-colors hover:text-accent'

/** Class combinations shared by the footer columns, kept in one place so they never drift apart. */
export const footerStyles = {
  columnList: 'flex flex-col gap-3.5',
  navLink: clsx('text-[16px] font-medium text-muted', interactive),
  socialLink: clsx(listItem, 'font-medium text-muted', interactive),
  contactItem: clsx(listItem, 'text-body'),
  contactLink: clsx(listItem, 'text-body', interactive),
} as const
