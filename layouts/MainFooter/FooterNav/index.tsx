import React from 'react'
import Link from 'next/link';

import Heading from '@/components/Heading';

import styles from "./FooterNav.module.scss";

type FooterNavType = {
  footerNavItems: any,
  headline: string;
}

const FooterNav: React.FC<FooterNavType> = ({ footerNavItems, headline }) => (
  <div className={styles.footerNavWrapper}>
    <Heading copy={headline!} className={styles.footerNavHeadline} />
    <ul role="menubar" className={styles.footerNav}>
      {
        footerNavItems && footerNavItems.map((navItem) => (
          <li key={navItem?.menuLabel}>
            <Link
              className={styles.footerNavItem}
              href={navItem?.menuLink!}
              target={navItem?.menuTarget!}
            >
              <svg>
                <use href={`/icons/footer-icons.svg#${navItem?.menuIcon}`}></use>
              </svg>
            </Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default FooterNav
