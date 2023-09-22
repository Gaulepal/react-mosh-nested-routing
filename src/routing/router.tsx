import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import UserListPage from './UserListPage';
import UserDetailPage from './UserDetailPage';
import Layout from './Layout';
import ErrorPage from './ErrorPage';
import LoginPage from './LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
        children: [
          {
            path: 'users',
            element: <UserListPage />,
          },
          {
            path: 'users/:id',
            element: <UserDetailPage />,
          },
        ],
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
