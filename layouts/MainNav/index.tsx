import React from "react";

import { useDefaultNav } from "@/hooks/useDefaultNav";
import MenuItemList from "./MenuItemsList";

import styles from "./MainNav.module.scss";

const MainNav: React.FC = (props) => {
  const menuItems = useDefaultNav();
  console.log(menuItems);

  return (
    <div className={styles.mainNavWrapper}>
      <header className={styles.mainNav}>
        <menu className={styles.mainNavMenu}>
          {/* <MenuItemList navItems={menuItems} /> */}
        </menu>
      </header>
    </div>
  )
}

export default MainNav;
