import { Layout, Typography } from 'antd';
import React from 'react';

import type { IRouteConfig } from '@/routes/routes';

const { Content, Footer } = Layout;
const { Text } = Typography;

const UserLayout: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  return (
    <Layout className="_bg">
      <Content></Content>
      <Footer>
        <Text>
          Vite2.0 + React + Antd <Text type="secondary">@JS-banana 2021</Text>
        </Text>
      </Footer>
    </Layout>
  );
};
export default UserLayout;
