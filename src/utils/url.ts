/**
 * True for absolute/external URLs (http(s):// or protocol-relative //) that should
 * render as a plain anchor rather than a client-side router link.
 */
export const isExternalUrl = (url: string): boolean =>
  /^https?:\/\//.test(url) || url.startsWith('//')
