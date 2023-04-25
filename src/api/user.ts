/* eslint-disable no-unused-vars */
import request from '@/api/request';

enum Api {
  USER_Login = '/account/login',
  USER_INFP = '/account/user',
}

interface ResProps {
  status: number;
  data: any;
  timestamp: number;
  message: string | null;
}

export const login = (data: {
  username: string;
  password: string;
  clientId: 'b0aec155-ba73-4d30-898c-32ec86a51b6c';
}): Promise<ResProps> => request({ url: Api.USER_Login, method: 'POST', data });

export const getUserInfo = () => request({ url: Api.USER_INFP, method: 'GET' });
