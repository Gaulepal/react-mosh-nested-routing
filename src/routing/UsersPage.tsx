import UserDetailPage from './UserDetailPage';
import UserListPage from './UserListPage';

const UsersPage = () => {
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
