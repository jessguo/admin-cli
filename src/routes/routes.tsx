import React from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home';
import Login from '@/pages/User/Login';
import BasicLayout from '@/layouts/BasicLayout';
import UserLayout from '@/layouts/UserLayout';
import Redirect from '@/pages/Redirect';
export interface IRouteConfig {
  // 路由路径
  path: string;
  // 路由组件
  component?: any;
  // 302 跳转
  redirect?: string;
  exact?: boolean;
  // 路由信息
  title: string;
  icon?: string;
  // 是否校验权限, false 为不校验, 不存在该属性或者为true 为校验, 子路由会继承父路由的 auth 属性
  auth?: boolean;
  routes?: IRouteConfig[];
}

const routes: IRouteConfig[] = [
  {
    path: '/',
    title: '/',
    exact: true,
    component: Redirect,
  },
  {
    path: '/sys',
    component: BasicLayout,
    title: '系统路由',
    // exact: true,
    routes: [
      {
        path: '/sys/home',
        title: '首页',
        icon: 'home',
        component: React.lazy(() => import('@/pages/Home')),
      },
      {
        path: '/sys/about',
        title: '关于',
        icon: 'home',
        component: React.lazy(() => import('@/pages/About')),
      },
    ],
  },
];

export default createBrowserRouter(routes);
