import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='w-full flex text-zinc-800'>
      {/* <Link to='/' className='mr-8 pr-6'> */}
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive ? 'text-green-400 font-bold pr-6' : 'pr-6'
        }
      >
        Home
      </NavLink>
      <NavLink
        to='/users'
        className={({ isActive, isPending }) =>
          isPending ? 'bg-red-400' : isActive ? 'text-green-400 font-bold' : ''
        }
      >
        Users
      </NavLink>
    </nav>
  );
};

export default NavBar;
