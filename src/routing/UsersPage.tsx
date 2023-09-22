import { Navigate } from 'react-router-dom';
import UserDetailPage from './UserDetailPage';
import UserListPage from './UserListPage';
import useAuth from './hooks/useAuth';

const UsersPage = () => {
  const { user } = useAuth();
  console.log('user::', user);

  if (!user) {
    //redirect the user to the home page
    return <Navigate to='/login' />;
  }

  return (
    <div className='bg-green-50 flex'>
      <div className='w-1/2 bg-green-300'>
        <UserListPage />
      </div>
      <div className='flex-1 bg-orange-300'>
        <UserDetailPage />
      </div>
    </div>
  );
};

export default UsersPage;
