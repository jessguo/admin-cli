import React, { useState, useEffect } from 'react';
import { Table, TablePaginationConfig } from 'antd';
import useSWR from 'swr';
import Api, { Paylod, Filters } from '@/api/devcie';
import Header from './Filter';
import { columns, initPagination, fetcherList } from './config';

const filters: Filters = {
  sn: null,
  status: null,
};

const paylod: any = {
  filters,
};

const Index = () => {
  const [filterData, setFilterData] = useState<Filters>(filters);
  const [pagination, setPagination] = useState({
    ...initPagination,
    total: 100,
  });

  const query = {
    ...pagination,
    filters: filterData,
  };
  const fetcherList = (params: [string, Paylod]): Promise<ResProps> => {
    const [, data] = params;
    return Api.getDeviceList(data);
  };
  const { data, isLoading, mutate } = useSWR(['/api/device/list', query], fetcherList);
  console.log('data: ', isLoading, data);

  const handleFilterChange = (values: Filters) => {
    mutate();
    setFilterData(values);
    // mutate({ data: query });
  };
  const handleTableChange = (p: TablePaginationConfig) => {
    // console.log('pagination: ', pagination);
    setPagination(p);
  };
  return (
    <div>
      <Header onFinish={handleFilterChange} />
      <Table
        scroll={{ x: 1200 }}
        loading={isLoading}
        onChange={handleTableChange}
        dataSource={data?.data.records}
        columns={columns}
        pagination={{ ...pagination, total: data?.data?.total }}
      />
    </div>
  );
};
export default Index;
