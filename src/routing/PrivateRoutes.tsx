import { Navigate, Outlet } from 'react-router-dom';
import useAuth from './hooks/useAuth';

const PrivateRoute = () => {
  const { user } = useAuth();
  // console.log('user::', user);

  if (!user) {
    //redirect the user to the home page
    return <Navigate to='/login' />;
  }
  return <Outlet />;
};

export default PrivateRoute;
