import React, { useEffect } from 'react';
import useSWR from 'swr';
import { Descriptions, Space, Row, Button } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import { IProps, fetcherInfo, LoadingSketch } from './config';
import { Span, HeartIcon } from '@/components';

const Index: React.FC<IProps> = ({ id, onBack }) => {
  //
  const { data, isLoading } = useSWR(['/device/info', id], fetcherInfo);
  const info = data?.data || {};

  // title
  const Title = (
    <Row justify={'space-between'}>
      <Space>
        <span>设备详情</span>
        <span>{info.sn}</span>
      </Space>
      <Space>
        <Button icon={<RollbackOutlined />} type="primary" onClick={onBack}>
          返回
        </Button>
      </Space>
    </Row>
  );

  // views

  if (isLoading) return <LoadingSketch />;

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      {/* 设备详情 */}
      <Descriptions title={Title} layout="vertical" column={4} bordered={true}>
        <Descriptions.Item label="设备sn">
          <Span>{info?.sn}</Span>
        </Descriptions.Item>
        <Descriptions.Item label="设备名称">
          <Span>{info?.name}</Span>
        </Descriptions.Item>
        <Descriptions.Item label="设备型号">
          <Span>{info?.model?.name}</Span>
        </Descriptions.Item>
        <Descriptions.Item label="设备版本">
          <Span>{info?.model?.remark}</Span>
        </Descriptions.Item>
        <Descriptions.Item span={2} label="设备 ID">
          <Span>{info.id}</Span>
        </Descriptions.Item>
        <Descriptions.Item label="硬件版本">
          <Span>{info?.hardwareVersion}</Span>
        </Descriptions.Item>
        <Descriptions.Item label="备注信息">
          <Span>{info?.remark}</Span>
        </Descriptions.Item>
      </Descriptions>
      {/*  固件信息 */}
      <Descriptions title="固件信息" layout="vertical" column={4} bordered={true}>
        <Descriptions.Item label="当前版本">
          <Span>{info?.firmwareVersion}</Span>
        </Descriptions.Item>
        <Descriptions.Item label="目标版本">
          <Span>{info?.targetFirmwareVersion}</Span>
        </Descriptions.Item>
      </Descriptions>
      {/*  物联模组 */}
      <Descriptions title="物联模组" layout="vertical" column={4} bordered={true}>
        <Descriptions.Item label="模组 SN">
          <Span>{info?.collector?.sn}</Span>
        </Descriptions.Item>
        <Descriptions.Item label="在线状态">
          <HeartIcon style={{ color: 'hotpink' }} />
        </Descriptions.Item>
      </Descriptions>
    </Space>
  );
};
export default Index;
