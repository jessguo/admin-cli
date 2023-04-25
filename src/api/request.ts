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
// axios.interceptors.request.use((request) => {
//   // 添加token、应用信息等
//   request.headers = {
//     ...request.headers,
//     token: sessionStorage.getItem('x-viteApp-token') || '',
//   };
//   return request;
// });

// 对返回的结果做处理
accountInstance.interceptors.response.use(
  (response) => {
    const res = response.data;

    if (res.code === 3) {
      message.error('登录超时，请重新登录');
      sessionStorage.removeItem('userinfo');
      // history.replace('/');
      return null;
    }
    return res;
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
