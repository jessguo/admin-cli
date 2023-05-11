import React, { useEffect, useState } from 'react';
import { Card, Form, Input, Button, Space, notification, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import cls from './index.module.less';
import useStore from '@/store/index';
import { UserTypes } from '@/api/user';
import logo from '@/assets/logo.png';

const wrapperCol = {
  offset: 6,
  span: 18,
};
const Index = () => {
  const login = useStore((state) => state.login);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: UserTypes) => {
    setLoading(true);
    const response = await login(values);
    setLoading(false);
    if (response.status == 0) {
      notification.success({
        message: response.message,
        description: '登录成功',
      });
      navigate('/device/list');
    }
  };

  return (
    <div className={cls.loginBox}>
      <Space>
        <img className={cls.logoPng} src={logo} alt="logo" />
        <h2>MangoPower Iot Admin</h2>
      </Space>
      <Form name="basic" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} className={cls.formStyles} initialValues={{ remember: true }} autoComplete="true" onFinish={onFinish}>
        <Form.Item
          label="用户名"
          name="username"
          validateTrigger="onBlur" // 在这里设置校验时机
          rules={[
            { required: true, message: '请输入用户名' },
            { type: 'email', message: '邮箱格式错误' },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={wrapperCol}>
          <Button loading={loading} type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Index;
