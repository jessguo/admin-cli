import React, { useState, useEffect } from 'react';
import { Table, TablePaginationConfig, Space } from 'antd';
import useSWRMutation from 'swr/mutation';
import { Paylod, Filters } from '@/api/devcie';
import Header from './Filter';
import { columns, initPagination, filters, fetcherList } from './config';
import Info from './Info';
import type { ColumnsType } from 'antd/es/table';

const Index = () => {
  const [filterData, setFilterData] = useState<Filters>(filters); // 过滤条件
  // 分页
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    ...initPagination,
    total: 100,
  });

  const [id, setID] = useState(null);

  const { trigger, isMutating, data } = useSWRMutation('/device/list', fetcherList);

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

  const Actions: ColumnsType<any> = [
    {
      title: '操作',
      key: 'id',
      width: 120,
      align: 'center',
      render: (_: string, record: any) => {
        return (
          <Space>
            <a onClick={() => setID(record.id)}>详情</a>
          </Space>
        );
      },
    },
  ];

  // 页面组件init
  useEffect(() => {
    // 请求参数
    const query: Paylod = {
      current: pagination.current!,
      filters: filterData,
    };
    trigger(query);
  }, []);

  const ListView = (
    <>
      <Header onFinish={handleFilterChange} />
      <Table rowKey={'id'} scroll={{ x: 1200 }} loading={isMutating} onChange={handleTableChange} dataSource={data?.data.records} columns={[...columns, ...Actions]} pagination={{ ...pagination, total: data?.data?.total }} />
    </>
  );

  return <div>{!id ? ListView : <Info onBack={() => setID(null)} id={id} />}</div>;
};
export default Index;
