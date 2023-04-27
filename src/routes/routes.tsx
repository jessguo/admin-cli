import React from 'react';
import { RouteObject, createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '@/pages/Home';
import Login from '@/pages/User/Login';
import BasicLayout from '@/layouts/BasicLayout';
import UserLayout from '@/layouts/UserLayout';
import Redirect from '@/pages/Redirect';
import NoFond from '@/pages/NoFond';
const routes: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <Navigate to="/home" replace />,
      },
      {
        path: '/user',
        children: [
          {
            index: true,
            element: <Login />,
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

export default createBrowserRouter(routes);
