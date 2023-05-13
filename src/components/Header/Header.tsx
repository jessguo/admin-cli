import React, { useEffect, useState } from 'react';
import { Avatar, Dropdown, Layout, Menu, Space, Row, Col, Badge } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { layoutMenus, getPathNameToArrary } from '@/routes/index';
import logo from '@/assets/logo.png';
import avatar from '@/assets/avatar.png';
import LayoutMenus from '../Menu/LayoutMenus';

// 获取环境变量
const envName = import.meta.env.VITE_APP_ENV;
const isShow = envName !== 'production';

const { Header } = Layout;

const items = [
  {
    key: 'logout',
    icon: <LogoutOutlined />,
    label: '退出登录',
  },
];

interface HeadProps extends Props {
  onLogout: MenuProps['onClick'];
}
const MyHeader: React.FC<HeadProps> = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <Header style={{ background: '#fff' }}>
      <Row justify={'space-between'}>
        <Col>
          {isShow ? (
            <Badge.Ribbon text={envName} color="pink">
              <Avatar size={50} src={logo} />
            </Badge.Ribbon>
          ) : (
            <Avatar size={50} src={logo} />
          )}
        </Col>
        <Col>
          <Space>
            <LayoutMenus />
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
