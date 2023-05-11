/* eslint-disable no-unused-vars */
import { adminRequest } from '@/api/request';
import { OnlineStatus } from '@/constants/enums';

enum Api {
  DEVICE_LIST = '/device/list',
}

// Login user接口

export interface Filters {
  sn: number | null;
  status: OnlineStatus | null;
}
export interface Paylod {
  current: number;
  size: number;
  filters: Filters;
}

export const getDeviceList = (data: Paylod): Promise<ResProps> => adminRequest({ url: Api.DEVICE_LIST, method: 'post', data });

export default {
  getDeviceList,
};
