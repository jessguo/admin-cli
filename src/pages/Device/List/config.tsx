import React from 'react';
import { TablePaginationConfig, Space, Tag, Skeleton } from 'antd';
import Api, { ListPaylod, Filters } from '@/api/admin';
import dayjs from 'dayjs';
import type { ColumnsType } from 'antd/es/table';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import Icon from '@ant-design/icons';

const formatStr = 'YYYY-MM-DD HH:mm';

type Fetch = [string, string];

export interface IProps {
  id: string | null;
  onBack: () => void;
}

const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);

export const LoadingSketch = () => (
  <>
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <Skeleton active />
      <Skeleton active />
      <Skeleton active />
    </Space>
  </>
);
export const initPagination: TablePaginationConfig = { current: 1, pageSize: 10, total: 0, showSizeChanger: false };

export const filters: Filters = {
  sn: null,
  status: null,
};
export interface SendRequestArgs {
  arg: ListPaylod;
}

export interface Recod {
  model: any;
  collector: any;
}

// fetcher 函数
export const fetcherList = async (_: string, { arg }: SendRequestArgs): Promise<ResProps> => {
  return Api.getDeviceList({
    ...arg,
    pageSize: 10,
  });
};

export const HeartIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={HeartSvg} {...props} />;

export const Span: React.FC<Props> = ({ children }) => {
  return <>{children ?? '--'}</>;
};

export const fetcherInfo = ([_, id]: Fetch): Promise<ResProps> => {
  return Api.getDeviceInfo({ id });
};

export const columns: ColumnsType<Recod> = [
  {
    title: '序号',
    dataIndex: 'id',
    width: 80,
    align: 'center',
    render: (_: string, __: any, index: number) => index + 1,
  },
  {
    title: 'SN',
    dataIndex: 'sn',
    key: 'sn',
    align: 'center',
  },
  {
    title: '设备名称',
    dataIndex: 'name',
    width: 200,
    key: 'name',
    align: 'center',
  },
  {
    title: '设备型号',
    dataIndex: 'model.name',
    width: 180,
    key: 'model.name',
    align: 'center',
    render: (_: string, { model }) => (model ? model['name'] : ''),
  },
  {
    title: '设备状态',
    dataIndex: 'collector.status',
    width: 240,
    key: 'collector.status',
    align: 'center',
    render: (_: string, { collector }) => {
      const status = collector ? collector['status'] : '';
      if (status === 1) return <Tag color="success">在线</Tag>;
      if (status === 2) return <Tag color="success">离线</Tag>;
      return <Tag>--</Tag>;
    },
  },
  {
    title: '供应商',
    dataIndex: 'supplier',
    key: 'supplier',
    align: 'center',
    width: 120,
  },
  {
    title: '数采器',
    dataIndex: 'collector.sn',
    key: 'collector.sn',
    align: 'center',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    key: 'createdAt',
    align: 'center',
    width: 240,

    render: (_: string, record: any) => dayjs(record['createdAt']).format(formatStr),
  },
  {
    title: '备注信息',
    dataIndex: 'remark',
    key: 'remark',
    width: 120,
    align: 'center',
    render: (text) => <div style={{ wordWrap: 'break-word', wordBreak: 'break-word' }}>{text}</div>,
  },
];
