import { Layout, Typography } from 'antd';
import React from 'react';
import { Link, Outlet, useFetchers, useNavigation, useRevalidator } from 'react-router-dom';

const { Content, Footer } = Layout;
const { Text } = Typography;

const UserLayout: React.FC = () => {
  return (
    <Layout style={{ background: '#f5f5f5' }}>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};
export default UserLayout;
