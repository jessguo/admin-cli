import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme, Row, Col, Dropdown, Space, Avatar } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { LaptopOutlined, NotificationOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import useUser from '@/store/index';
import Authority from '@/layouts/Authority';
import Header from '@/components/Header';
import BusinessMenus from '@/components/Menu/BusinessMenus';
import styles from './index.module.less';

const { Content, Footer, Sider } = Layout;

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const menus: MenuProps['items'] = [
  {
    key: `/device/list`,
    label: '设备列表',
    icon: React.createElement(UserOutlined),
  },
  {
    key: `/device/model-list`,
    label: '设备型号',
    icon: React.createElement(UserOutlined),
  },
  {
    key: `/device/firmware-list`,
    label: '固件管理',
    icon: React.createElement(UserOutlined),
  },
];

export default function BasicLayout() {
  const logout = useUser((state) => state.logout);
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  console.log(styles);

  const handeLogout: MenuProps['onClick'] = ({ key }) => {
    // 重定登陆页面
    if (key === 'logout') {
      logout();
      // 页面重定向
      navigate('/login', { replace: true });
    }
  };

  return (
    <Authority>
      <Layout>
        <Header onLogout={handeLogout} />
        <Layout hasSider>
          <Sider width={200} style={{ background: colorBgContainer }}>
            <BusinessMenus />
          </Sider>
          <Layout style={{ padding: '0 24px 24px', minWidth: '900px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
              }}>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Authority>
  );
}
