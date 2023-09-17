import React from 'react'
import CustomLink from '../../../components/CustomLink';

import styles from "./MenuItem.module.scss";

const MenuItem: React.FC<MainNav.MenuItemType> = ({ menuLink, menuLabel, menuIcon, menuTarget }) => (
  <li className={styles.mainNavMenuItem}>
    <CustomLink className={styles.mainNavMenuLink} path={menuLink!} target={menuTarget!}>
      <svg>
        <use href={`/icons/nav-icons.svg#${menuIcon}`}></use>
      </svg>

      <span>{menuLabel}</span>
    </CustomLink>
  </li>
)

export default MenuItem;