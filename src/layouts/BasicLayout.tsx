import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, Outlet, useFetchers, useNavigation, useRevalidator } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

export default function BasicLayout() {
  let navigation = useNavigation();
  let revalidator = useRevalidator();
  let fetchers = useFetchers();
  let fetcherInProgress = fetchers.some((f) => ['loading', 'submitting'].includes(f.state));

  return (
    // <Layout>
    //   <Content>
    //     <Outlet />
    //   </Content>
    // </Layout>
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
}
