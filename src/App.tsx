import React, { Suspense } from 'react';
import { Spin, ConfigProvider, theme } from 'antd';
import { RouterProvider } from 'react-router-dom';

// import Authority from '@/layouts/Authority';
import router from '@/routes/index';

const App = () => {
  return (
    <Suspense fallback={<Spin size="large" className="layout__loading" />}>
      <ConfigProvider
        theme={{
          token: {
            // colorPrimary: '#ffc409',
          },
        }}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </Suspense>
  );
};

export default App;
