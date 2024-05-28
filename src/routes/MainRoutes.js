import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// // utilities routing
// const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
// const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
// const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const CreateBaggage = Loadable(lazy(() => import('views/utilities/createBaggage')));
const GetBagById= Loadable(lazy(() => import('views/utilities/getBagById')));
const UpdateBagLocation= Loadable(lazy(() => import('views/utilities/updateBagLocation')));

// sample page routing
// const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    
    {
      path: 'utils',
      children: [
        {
          path: 'createBaggage',
          element: <CreateBaggage />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'getBagById',
          element: <GetBagById />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'updateBagLocation',
          element: <UpdateBagLocation />
        }
      ]
    }
  ]
};

export default MainRoutes;
