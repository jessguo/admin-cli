import React, { useState, useEffect } from 'react';
import { Layout, Form, Input, Button, Row, Col, Select, Space } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const Index = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };
  return (
    // <Row gutter={16}>
    //   <Col className="gutter-row" span={6}>
    //     <Input prefix={<EditOutlined className="site-form-item-icon" />} placeholder="请输入sn" />
    //   </Col>
    //   <Col className="gutter-row" span={6}>
    //     <Select
    //       defaultValue="lucy"
    //       style={{ width: '100%' }}
    //       options={[
    //         { value: 'jack', label: 'Jack' },
    //         { value: 'lucy', label: 'Lucy' },
    //         { value: 'Yiminghe', label: 'yiminghe' },
    //         { value: 'disabled', label: 'Disabled', disabled: true },
    //       ]}
    //     />
    //   </Col>
    //   <Col className="gutter-row" span={6}>
    //       <Button>

    //       </Button>
    //   </Col>
    // </Row>
    // <div>
    <Form form={form} onFinish={onFinish}>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <Form.Item name="sn">
            <Input prefix={<EditOutlined className="site-form-item-icon" />} placeholder="请输入sn" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item name="online">
            <Select
              defaultValue="lucy"
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
            />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
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
    // </div>
  );
};
export default Index;
