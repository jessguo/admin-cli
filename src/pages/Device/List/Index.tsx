import React, { useState, useEffect } from 'react';
import { Table, TablePaginationConfig, Button } from 'antd';
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

  const { data, isLoading } = useSWR(['/api/device/list', query], fetcherList);
  console.log('data: ', isLoading, data);

  const handleFilterChange = (values: Filters) => {
    setFilterData(values);
  };
  const handleTableChange = (p: TablePaginationConfig) => {
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
      <Button onClick={() => set(true)}>12121</Button>
    </div>
  );
};
export default Index;
