import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import UserListPage from './UserListPage';
import UserDetailPage from './UserDetailPage';

createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/users',
    element: <UserListPage />,
  },
  {
    path: '/users/:id',
    element: <UserDetailPage />,
  },
]);
