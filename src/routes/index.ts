import { createBrowserRouter } from 'react-router-dom';
import ConfigRoutes, { IRouter } from './routes';
import { MenuProps } from 'antd';

/**
 *
 * @param pathname
 * @returns {string[]}
 */
export const getPathNameToArrary = (pathname: string) => {
  const pathArr = pathname
    .split('/')
    .filter((item) => item)
    .map((v) => `/${v}`);
  return pathArr;
};

// 根据routes生成menu
const getLayoutMenus = (routes: IRouter[]) => {
  const root = routes.find((t: IRouter) => t.path === '/')?.children!;
  const lays = root.filter((children: any) => children.isMenu);
  return lays.map((r: any) => ({
    key: `/${r.path}`,
    label: r.label,
    icon: r.icon || false,
  }));
};

export const getBusinessMenus = (routerPath = 'device') => {
  const root = ConfigRoutes.find((t: IRouter) => t.path === '/')?.children!;
  const lay = root.find((children: any) => children.path === routerPath);
  const layChildren = lay?.children?.filter((v) => v.path);
  const menus = layChildren?.map((r: any) => ({
    key: `${r.path}`,
    label: r.label,
    icon: r.icon || false,
  }));
  return menus;
};

// 获取第一层路由
export const layoutMenus = getLayoutMenus(ConfigRoutes);

export default createBrowserRouter(ConfigRoutes as any);
