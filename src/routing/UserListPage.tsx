const UserListPage = () => {
  const users = [
    { id: 1, name: 'Kumar' },
    { id: 2, name: 'Rajan' },
    { id: 3, name: 'Dinesh' },
  ];
  return (
    <ul className='list-group'>
      {users.map((user) => (
        <li className='list-group-item' key={user.id}>
          <a href='#'>{user.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default UserListPage;
