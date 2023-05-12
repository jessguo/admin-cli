import React from 'react';
import { TablePaginationConfig, Space, Divider } from 'antd';
import Api, { Paylod, Filters } from '@/api/devcie';
import dayjs from 'dayjs';
export const initPagination: TablePaginationConfig = { current: 1, pageSize: 10, total: 0, showSizeChanger: false };
import type { ColumnsType } from 'antd/es/table';

const formatStr = 'YYYY-MM-DD HH:mm';

export const fetcherList = (params: [string, Paylod]): Promise<ResProps> => {
  const [, data] = params;
  return Api.getDeviceList(data);
};

interface Recod {
  model: any;
  collector: any;
}

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
      if (status === 1) return '在线';
      if (status === 2) return '在线';
      return '--';
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
    render: (text, record) => <div style={{ wordWrap: 'break-word', wordBreak: 'break-word' }}>{text}</div>,
  },
  {
    title: '操作',
    dataIndex: 'Action',
    key: 'Action',
    width: 120,
    render: (_, record) => (
      <Space>
        <a>Delete</a>
      </Space>
    ),
  },
];
