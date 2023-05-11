import React, { useState, useEffect } from 'react';
import { Layout, Form, Input, Button, Row, Col, Select, Skeleton, Table, TablePaginationConfig } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import useSWR from 'swr';
import Api, { Paylod, Filters } from '@/api/devcie';
import Header from './Filter';
import type { ColumnsType } from 'antd/es/table';
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
  const [pagination, setPagination] = useState(initPagination);

  const query = {
    ...pagination,
    filterData,
  };

  console.log('query', query);
  const { data, isLoading } = useSWR(['device/list', query], fetcherList);

  const handleFilterChange = (values: Filters) => {
    setFilterData(values);
  };

  return (
    <div>
      <Header onFinish={handleFilterChange} />
      <Table loading={isLoading} dataSource={data?.data} columns={columns} pagination={pagination} />
    </div>
  );
};
export default Index;
