import { Layout, Menu, Typography } from 'antd';
import { createBrowserHistory } from 'history';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import routes, { IRouteConfig } from '@/routes/routes';

import cls from './index.module.less';
const { Sider } = Layout;

const FilterRoutes = (arr: IRouteConfig[]): IRouteConfig[] => arr.find((n) => n.path === '/sys')?.routes || [];

const Header: React.FC = () => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const sysRoutes = FilterRoutes(routes);
  const history = createBrowserHistory();

  // 路由监听
  useEffect(() => {
    const pathname = history.location.pathname;
  }, [history.location.pathname]);

  return (
    <Sider>
      <div className={cls.menu_logo}>
        <Typography.Title className={cls.logo_title} level={5}>
          Logo
        </Typography.Title>
      </div>
      <Menu theme="dark" mode="inline" openKeys={openKeys} selectedKeys={selectedKeys}>
        {sysRoutes.map((item) => (
          <Menu.Item key={item.path}>
            <Link to={item.path}>{item.title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};
export default Header;
