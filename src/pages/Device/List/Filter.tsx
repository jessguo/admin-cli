import React, { useState, useEffect } from 'react';
import { Layout, Form, Input, Button, Row, Col, Select, Space } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { Filters } from '@/api/devcie';

interface FilterProps {
  onFinish: (v: Filters) => void;
}

const filters: Filters = {
  sn: null,
  status: null,
};

const selectOptions = [
  { value: '1', label: '在线' },
  { value: '2', label: '离线' },
  { value: null, label: '全部' },
];

const Index: React.FC<FilterProps> = ({ onFinish }) => {
  const [form] = Form.useForm();
  const handleSubmit = (values: Filters) => {
    onFinish(values);
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
      <Row gutter={16}>
        <Col span={4}>
          <Form.Item name="sn">
            <Input prefix={<EditOutlined />} placeholder="请输入sn" allowClear />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="online">
            <Select allowClear options={selectOptions} />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item shouldUpdate>
            {() => (
              <Space>
                <Button>重置</Button>
                <Button type="primary" htmlType="submit">
                  查找
                </Button>
              </Space>
            )}
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
export default Index;
