import { message } from 'antd';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
// import { BASE_URL } from '@c/constant';

// baseURL  通用axios 用于账号相关接口请求
// 这里获取不同环境的basurl
const baseURL = import.meta.env.VITE_ACCOUNT_URL;
const accountInstance = axios.create({
  baseURL: baseURL,
});

// baseURL 业务axios 用于业务相关接口请求

// // 请求拦截
accountInstance.interceptors.request.use((request: any) => {
  // 添加token、应用信息等
  request.headers = {
    ...request.headers,
    'client-id': 'eb413a04-3b9e-41e6-8bbe-b8d64996dc35',
    'app-id': 'ead250f5-c093-44cc-9e42-f8197eb1511a',
    // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    // token: sessionStorage.getItem('x-viteApp-token') || '',
  };
  return request;
});

// // 对返回的结果做处理
accountInstance.interceptors.response.use(
  (response) => {
    const res = response.data;

    if (res.status !== 0) {
      message.error(res.message);
    }
    return {
      ...res,
      isSuccess: res.status === 0,
    };
  },
  (err) => {
    console.log('err', err);
  },
);

const request = <T>(reqConfig: AxiosRequestConfig): Promise<T> => {
  return accountInstance.request<T, T>(reqConfig);
};

export default request;
export type { AxiosInstance, AxiosResponse };
