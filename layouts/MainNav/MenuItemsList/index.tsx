import React from 'react'

import { MainNav } from '@/types/declaration';
import MenuItem from '../MenuItem';

const MenuItemList: React.FC<MainNav.MenuItemsListType> = ({ navItems }) => {
  return (
    <>
      {
        navItems && navItems.map((navItem) => <MenuItem key={navItem.menuLabel} {...navItem} />)
      }
    </>
  )
}

export default MenuItemList;