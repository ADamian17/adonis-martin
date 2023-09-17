import { IDefaultNavigationFields } from '../contentful-env';

declare module '*.scss';

declare namespace MainNav {
  type MenuItemType = {
    menuLink: Queries.ContentfulMenuItem['menuLink'];
    menuLabel: Queries.ContentfulMenuItem['menuLabel'];
    menuIcon: Queries.ContentfulMenuItem['menuIcon'];
    menuTarget: Queries.ContentfulMenuItem['menuLabel'] | null;
  };

  type MenuItemsType = IDefaultNavigationFields['menuItems'];

  type MenuItemsListType = {
    navItems: MenuItemType[];
  };
}
