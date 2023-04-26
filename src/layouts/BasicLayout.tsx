import { Layout } from 'antd';
// import { createBrowserHistory } from 'history';
import { createBrowserHistory } from 'history';
import React from 'react';

import { IRouteConfig } from '@/routes/routes';

import MyHeader from '../components/Header';
import MyMenu from '../components/Menu';

const { Content } = Layout;

const BasicLayout: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  // const history = createBrowserHistory();

  // if (!localStorage.getItem('vite-react-ts-antd-token')) {
  //   history.push('/user/login');
  // }

  return (
    <Layout>
      <MyMenu />
      <Layout>
        <MyHeader />
        <Content style={{ height: 'calc(100vh - 60px)' }}></Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
