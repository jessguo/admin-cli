import React, { Suspense } from 'react';
import { Spin, ConfigProvider, theme } from 'antd';
import { RouterProvider } from 'react-router-dom';

import useSWR, { SWRConfig, SWRConfiguration } from 'swr';
import router from '@/routes/index';

const themeCofig = {
  token: {},
};
const swrConfig: SWRConfiguration = {
  onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
    // 请求错误 不重试
    return;
    // debugger;
    // if (error.status === 401) return;
    // if (error.status === 404) return;
    // // 最多重试 3 次。
    // if (retryCount >= 3) return;

    // // 20秒后重试。
    // setTimeout(() => revalidate({ retryCount: retryCount }), 20000);
  },
};

const App = () => {
  return (
    <Suspense fallback={<Spin size="large" />}>
      <ConfigProvider theme={themeCofig}>
        {/* <SWRConfig value={swrConfig}> */}
        <RouterProvider router={router} />
        {/* </SWRConfig> */}
      </ConfigProvider>
    </Suspense>
  );
};

export default App;
