/* eslint-disable no-unused-vars */
import { accountRequest } from '@/api/request';

enum Api {
  USER_Login = '/account/login',
  USER_INFP = '/account/user',
}

// Login user接口
export interface UserTypes {
  username: string;
  password: string;
}

export const login = (data: UserTypes): Promise<ResProps> => accountRequest({ url: Api.USER_Login, method: 'POST', data });

export const getUserInfo = () => accountRequest({ url: Api.USER_INFP, method: 'GET' });

export default {
  login,
  getUserInfo,
};
