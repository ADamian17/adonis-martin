import type { MenuItem } from '@/store/menus'
import { MenuLink } from '@/ui/MenuLink'
import { FooterColumn } from './FooterColumn'
import { footerStyles } from './footer-styles'

type Props = {
  items: readonly MenuItem[]
}

/** Secondary site navigation, mirroring the Builder `Footer Nav` menu entry. */
export const FooterNav = ({ items }: Props) => (
  <FooterColumn title="Navigate">
    <nav aria-label="Footer" className={footerStyles.columnList}>
      {items.map((item) => (
        <MenuLink
          key={item.url}
          url={item.url}
          target={item.target}
          ariaLabel={item.ariaLabel}
          className={footerStyles.navLink}
        >
          {item.label}
        </MenuLink>
      ))}
    </nav>
  </FooterColumn>
)
