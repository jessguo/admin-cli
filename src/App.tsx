import React, { Suspense } from 'react';
import { Spin, ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';

// import Authority from '@/layouts/Authority';
import router from '@/routes/index';

const App = () => {
  return (
    <Suspense fallback={<Spin size="large" className="layout__loading" />}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#F4801A',
          },
        }}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </Suspense>
  );
};

export default App;
