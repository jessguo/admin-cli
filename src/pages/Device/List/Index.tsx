import React, { useState, useEffect } from 'react';
import { Table, TablePaginationConfig, Button } from 'antd';
import useSWRMutation from 'swr/mutation';
import Api, { Paylod, Filters } from '@/api/devcie';
import Header from './Filter';
import { columns, initPagination } from './config';

const filters: Filters = {
  sn: null,
  status: null,
};
interface SendRequestArgs {
  arg: Paylod;
}

const Index = () => {
  const [filterData, setFilterData] = useState<Filters>(filters); // 过滤条件
  // 分页
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    ...initPagination,
    total: 100,
  });

  // 请求参数
  const query: Paylod = {
    current: pagination.current!,
    filters: filterData,
  };

  // fetcher 函数
  const fetcher = async (url: string, { arg }: SendRequestArgs): Promise<ResProps> => {
    return Api.getDeviceList({
      ...arg,
      pageSize: 10,
    });
  };

  const { trigger, isMutating, data } = useSWRMutation('/device/list', fetcher);
  console.log('data: ', isMutating, data);

  // 条件查询
  const handleFilterChange = (values: Filters) => {
    const palylod = {
      current: 1,
      filters: values,
    };
    setFilterData(values);
    trigger(palylod);
    setPagination(initPagination);
  };

  // 分页
  const handleTableChange = (p: TablePaginationConfig) => {
    const palylod = {
      current: p.current!,
      filters: filterData,
    };
    setPagination(p);
    trigger(palylod);
  };

  // 页面组件init
  useEffect(() => {
    trigger(query);
  }, []);
  return (
    <div>
      <Header onFinish={handleFilterChange} />
      <Table
        scroll={{ x: 1200 }}
        loading={isMutating}
        onChange={handleTableChange}
        dataSource={data?.data.records}
        columns={columns}
        pagination={{ ...pagination, total: data?.data?.total }}
      />
    </div>
  );
};
export default Index;
