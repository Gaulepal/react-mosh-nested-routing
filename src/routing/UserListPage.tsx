import { Link } from 'react-router-dom';

const users = [
  { id: 1, name: 'Kumar' },
  { id: 2, name: 'Rajan' },
  { id: 3, name: 'Dinesh' },
];

const UserListPage = () => {
  return (
    <ul className='list-group'>
      {users.map((user) => (
        <li className='list-group-item' key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default UserListPage;
