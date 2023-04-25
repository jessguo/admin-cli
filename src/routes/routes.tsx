import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home';
import Login from '@/pages/User/Login';
export const HOME_PATH = '/';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export default createBrowserRouter(routes);
