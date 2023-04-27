import React, { Suspense } from 'react';
import { Spin } from 'antd';
import { RouterProvider } from 'react-router-dom';

// import Authority from '@/layouts/Authority';
import router from '@/routes/index';

const App = () => {
  return (
    <Suspense fallback={<Spin size="large" className="layout__loading" />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
