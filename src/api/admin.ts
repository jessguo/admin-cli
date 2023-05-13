/* eslint-disable no-unused-vars */
import { adminRequest } from '@/api/request';
import { OnlineStatus } from '@/constants/enums';

enum Api {
  DEVICE_LIST = '/device/list',
  DEVICE_INFO = '/device/info',
}

// Login user接口
export interface Filters {
  sn: number | null | string;
  status: OnlineStatus | null | string;
}
export interface ListPaylod {
  current: number;
  pageSize?: number;
  filters: Filters;
}
export interface InfoPalod {
  id: string;
}
export const getDeviceList = (data: ListPaylod): Promise<ResProps> => adminRequest({ url: Api.DEVICE_LIST, method: 'post', data });
export const getDeviceInfo = (data: InfoPalod): Promise<ResProps> => adminRequest({ url: Api.DEVICE_INFO, method: 'post', data });

export default {
  getDeviceList,
  getDeviceInfo,
};
