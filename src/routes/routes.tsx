import React from 'react';
import { RouteObject, createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '@/pages/Home';
import Login from '@/pages/User/Login';
import BasicLayout from '@/layouts/BasicLayout';
import UserLayout from '@/layouts/UserLayout';
import Redirect from '@/pages/Redirect';
import NoFond from '@/pages/NoFond';
import DeviceList from '@/pages/Device/List';
// const Auth: React.FC = () => {
//   return div;
// };
const routes: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <Navigate to="/home" replace />,
      },
      {
        path: '/login',
        Component: UserLayout,
        children: [
          {
            index: true,
            element: <Login />,
          },
        ],
      },
      {
        path: '/device',
        Component: BasicLayout,
        children: [
          {
            index: true,
            element: <DeviceList />,
          },
          {
            path: 'list',
            element: <DeviceList />,
          },
          {
            path: 'model-list',
            element: <Home />,
          },
          {
            path: 'firmware-list',
            element: <Home />,
          },
        ],
      },
      {
        path: '/collector',
        Component: BasicLayout,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: 'list',
            element: <Home />,
          },
          {
            path: 'model-list',
            element: <Home />,
          },
          {
            path: 'firmware-list',
            element: <Home />,
          },
        ],
      },
      {
        path: '/home',
        Component: BasicLayout,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
    ],
  },

  {
    path: '*',
    element: <NoFond />,
  },
];

export default routes;
