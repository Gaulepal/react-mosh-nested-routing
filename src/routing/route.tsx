import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import UserListPage from './UserListPage';
import UserDetailPage from './UserDetailPage';
import Layout from './Layout';
import ErrorPage from './ErrorPage';
import LoginPage from './LoginPage';
import PrivateRoute from './PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
        children: [],
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
  {
    // path: '/', 👈 don't need to set a path because this is `Layout` route. Its propose is to group route and enforcing layout or business logic
    element: <PrivateRoute />,
    children: [
      {
        // write any route that needs to be protected
        path: 'users',
        element: <UserListPage />,
        children: [
          {
            path: ':id',
            element: <UserDetailPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
