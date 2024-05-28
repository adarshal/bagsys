// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    
    {
      id: 'util-baggage',
      title: 'Create new Baggage',
      type: 'item',
      url: '/utils/createBaggage',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'bag-search',
      title: 'Search Bag',
      type: 'item',
      url: '/utils/GetBagByid',
      icon: icons.IconShadow,
      breadcrumbs: false
    },    
    {
      id: 'update-bag-location',
      title: 'Update bag location',
      type: 'item',
      url: '/utils/updateBagLocation',
      icon: icons.IconShadow,
      breadcrumbs: false
    }
    
  ]
};

export default utilities;
