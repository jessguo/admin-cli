/* eslint-disable no-unused-vars */
import { deviceRequest } from '@/api/request';
import { OnlineStatus } from '@/constants/enums';

enum Api {
  DEVICE_LIST = '/device/list',
}

// Login user接口
export interface Filters {
  sn: number | null | string;
  status: OnlineStatus | null | string;
}
export interface Paylod {
  current: number;
  pageSize?: number;
  filters: Filters;
}

export const getDeviceList = (data: Paylod): Promise<ResProps> => deviceRequest({ url: Api.DEVICE_LIST, method: 'post', data });

export default {
  getDeviceList,
};
