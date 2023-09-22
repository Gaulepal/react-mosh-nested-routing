import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='w-full flex text-zinc-800'>
      <Link to='/' className='mr-8 pr-6'>
        Home
      </Link>
      <Link to='/users'>Users</Link>
    </nav>
  );
};

export default NavBar;
