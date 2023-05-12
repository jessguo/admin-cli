import React, { useEffect, useState } from 'react';
import { Breadcrumb, Layout, Menu, theme, Row, Col, Dropdown, Space, Avatar } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import _ from 'lodash';
import type { MenuProps } from 'antd';
import useUser from '@/store/index';
import Authority from '@/layouts/Authority';
import Header from '@/components/Header';
import BusinessMenus from '@/components/Menu/BusinessMenus';
import styles from './index.module.less';

const { Content, Footer, Sider } = Layout;
export default function BasicLayout() {
  const pathname = useLocation().pathname;

  const logout = useUser((state) => state.logout);
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>(['Home']);

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

  useEffect(() => {
    const pathArr = pathname.split('/').map((v) => (v === '' ? 'home' : v));
    const breads = pathArr.map((t) => _.capitalize(t));
    setBreadcrumbs(breads);
  }, [pathname]);
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
              {breadcrumbs.map((t) => (
                <Breadcrumb.Item key={t}>{t}</Breadcrumb.Item>
              ))}
            </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                overflow: 'auto',
              }}>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Authority>
  );
}
