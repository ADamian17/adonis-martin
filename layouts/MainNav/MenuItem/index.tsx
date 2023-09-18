import React from 'react'
import Link from 'next/link';

import { MainNav } from '@/types/declaration';

import styles from "./MenuItem.module.scss";

const MenuItem: React.FC<MainNav.MenuItemType> = ({ menuLink, menuLabel, menuIcon, menuTarget }) => (
  <li className={styles.mainNavMenuItem}>
    <Link className={styles.mainNavMenuLink} href={menuLink} target={menuTarget}>
      <svg>
        <use href={`/icons/nav-icons.svg#${menuIcon}`}></use>
      </svg>

      <span>{menuLabel}</span>
    </Link>
  </li>
)

export default MenuItem;
