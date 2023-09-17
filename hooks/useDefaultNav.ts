import { MainNav } from '@/types/declaration';
import { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const query = gql`
  {
    defaultNavigation(id: "7Hg6muUPuMjUDK25R9JXbb") {
      menuItemsCollection {
        items {
          menuLink
        }
      }
    }
  }
`;

export const useDefaultNav = (): MainNav.MenuItemsType => {
  const { data, error } = useQuery(query);
  const [menuItems, setMenuItems] = useState<MainNav.MenuItemsType>([]);

  useEffect(() => {
    if (!error && data)
      setMenuItems(data?.defaultNavigation?.menuItemsCollection?.items);
  }, [error, data]);

  return menuItems;
};
