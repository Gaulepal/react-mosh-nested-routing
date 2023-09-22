import { useParams } from 'react-router-dom';

const UserDetailPage = () => {
  const params = useParams();
  console.log('parama object::', params);

  return <p>User: {params.id ? params.id : 'User not selected'}</p>;
};

export default UserDetailPage;
