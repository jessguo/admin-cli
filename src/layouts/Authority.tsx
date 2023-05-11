import React, { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import useUser from '@/store/index';

const Auth: React.FC<Props> = ({ children }) => {
  const token = useUser((state) => state.token);
  const isLogin = Boolean(token);
  // 没有登陆 做拦截
  if (!isLogin) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return <Fragment>{children}</Fragment>;
};

export default Auth;
