import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <div id='main' className='mt-8'>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
