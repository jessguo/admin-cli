import React from 'react';
import { redirect } from 'react-router-dom';

const RedirectPage = () => {
  return redirect('/sys/home');
};
export default RedirectPage;
