import React from 'react';
import { RouteObject, createBrowserRouter, Navigate } from 'react-router-dom';
import { UnorderedListOutlined, PlayCircleOutlined, CloudServerOutlined } from '@ant-design/icons';

import Home from '@/pages/Home';
import Login from '@/pages/User/Login';
import BasicLayout from '@/layouts/BasicLayout';
import UserLayout from '@/layouts/UserLayout';
import Redirect from '@/pages/Redirect';
import NoFond from '@/pages/NoFond';
import DeviceList from '@/pages/Device/List/Index';
// const Auth: React.FC = () => {
//   return div;
// };

export interface IRouter {
  index?: boolean;
  path?: string;
  children?: IRouter[];
  element?: React.ReactNode;
  icon?: any;
  Component?: any;
  title?: string; //
  isMenu?: boolean;
  label?: string;
}
const ConfigRoutes: IRouter[] = [
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <Navigate to="/device/list" replace />,
      },
      {
        path: 'device',
        Component: BasicLayout,
        isMenu: true,
        label: '设备',
        children: [
          {
            index: true,
            element: <Navigate to="/device/list" replace />,
          },
          {
            path: 'list',
            icon: <UnorderedListOutlined />,
            label: '设备列表',
            element: <DeviceList />,
          },
          {
            path: 'model-list',
            label: '设备型号',
            icon: <PlayCircleOutlined />,
            element: <Home />,
          },
          {
            path: 'firmware-list',
            label: '固件管理',
            icon: <CloudServerOutlined />,
            element: <Home />,
          },
        ],
      },
      {
        path: 'collector',
        Component: BasicLayout,
        isMenu: true,
        label: '模组',
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
            element: <Navigate to="/device/list" replace />,
          },
        ],
      },
    ],
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
    path: '*',
    element: <NoFond />,
  },
];

export default ConfigRoutes;
