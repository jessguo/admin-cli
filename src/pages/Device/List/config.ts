import { TablePaginationConfig } from 'antd';
import Api, { Paylod, Filters } from '@/api/devcie';

export const initPagination: TablePaginationConfig = { current: 1, size: 10 };

export const fetcherList = (params: [string, Paylod]): Promise<ResProps> => {
  const [, data] = params;
  console.log('params', params);
  return Api.getDeviceList(data);
};

export const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];
