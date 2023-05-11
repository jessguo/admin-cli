import { message } from 'antd';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from 'axios';
import useUser from '@/store/index';
export type { AxiosInstance, AxiosResponse, AxiosRequestHeaders };

// axios 工厂函数
const creatInstaceRequest = (baseURL: string) => {
  // 创建axios实例
  const instance = axios.create({
    baseURL,
  });
  // axios请求拦截
  const requstInterceptors = (request: any) => {
    // 获取token
    const token = useUser.getState().token;
    // 自定义头部
    request.headers = {
      ...request.headers,
      'client-id': 'eb413a04-3b9e-41e6-8bbe-b8d64996dc35',
      'app-id': 'ead250f5-c093-44cc-9e42-f8197eb1511a',
      'Content-Type': 'application/json',
      token: token || '',
    };
    return request;
  };

  // axios返回拦截
  const responestInterceptors = (response: AxiosResponse) => {
    const res = response.data;
    if (res.status !== 0) {
      message.error(res.message);
    }
    return {
      ...res,
      // 自定义新增isSuccess
      isSuccess: res.status === 0,
    };
  };
  // 全局统一拦截
  instance.interceptors.request.use(requstInterceptors);
  instance.interceptors.response.use(responestInterceptors);
  // 封装请求
  const request = <T>(reqConfig: AxiosRequestConfig): Promise<T> => {
    return instance.request<T, T>(reqConfig);
  };
  return request;
};

// 创建 account instance
const accountURL = import.meta.env.VITE_ACCOUNT_URL;
const accountRequest = creatInstaceRequest(accountURL);

// 创建 device instance
const deviceURL = import.meta.env.VITE_DEVICE_URL;
const deviceRequest = creatInstaceRequest(deviceURL);

// 创建 web-admin instance
const adminURL = import.meta.env.VITE_ADMIN_URL;
const adminRequest = creatInstaceRequest(adminURL);

export { accountRequest, deviceRequest, adminRequest };
