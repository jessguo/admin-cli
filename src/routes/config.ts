const routes: any[] = [
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <Navigate to="/home" replace />,
      },
      {
        path: '/login',
        Component: UserLayout,
        children: [
          {
            index: true,
            element: <Login />,
          },
        ],
      },
      {
        path: '/device',
        Component: BasicLayout,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: '/list',
            element: <Home />,
          },
          {
            path: '/model-list',
            element: <Home />,
          },
          {
            path: '/firmware-list',
            element: <Home />,
          },
        ],
      },
      {
        path: '/home',
        Component: BasicLayout,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
    ],
  },

  {
    path: '*',
    element: <NoFond />,
  },
];
