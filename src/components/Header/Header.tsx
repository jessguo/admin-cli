import React, { useState } from 'react';
import { Avatar, Dropdown, Layout, Menu, Space, Row, Col, Badge } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

import logo from '@/assets/logo.png';
import avatar from '@/assets/avatar.png';

const { Header } = Layout;
const items = [
  {
    key: 'logout',
    icon: <LogoutOutlined />,
    label: '退出登录',
  },
];
const items1: MenuProps['items'] = [
  {
    key: '/device',
    label: '设备',
    icon: 'desktop',
  },
  {
    key: '/collector',
    label: '物联模组',
    icon: 'desktop',
  },
];

interface HeadProps extends Props {
  onLogout: MenuProps['onClick'];
}
const MyHeader: React.FC<HeadProps> = ({ onLogout }) => {
  const navigate = useNavigate();

  const envName = import.meta.env.VITE_APP_ENV;
  const isShow = envName !== 'production';

  const handleRouter: MenuProps['onClick'] = (e) => {
    navigate(e.key, {
      replace: true,
    });
  };

  return (
    <Header style={{ background: '#fff' }}>
      <Row justify={'space-between'}>
        <Col>
          {isShow ? (
            <Badge.Ribbon text={envName} color="pink">
              <Avatar size={60} src={logo} />
            </Badge.Ribbon>
          ) : (
            <Avatar size={60} src={logo} />
          )}
        </Col>
        <Col>
          <Space>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['device']} items={items1} onClick={handleRouter} />
            <Dropdown menu={{ items, onClick: onLogout }} placement="bottom">
              <Space>
                <a onClick={(e) => e.preventDefault()}>
                  <Avatar size={30} src={avatar} />
                </a>
              </Space>
            </Dropdown>
          </Space>
        </Col>
      </Row>
    </Header>
  );
};

export default MyHeader;
