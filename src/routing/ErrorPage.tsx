import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const routeError = useRouteError();
  console.log('routeError::', routeError);

  const isRouteError = isRouteErrorResponse(routeError);
  // isRouteError returns true that means User tries to access invalid route

  return (
    <>
      <h1 className='text-red-400 text-3xl'>Oops...</h1>
      <p className='mb-4'>
        {isRouteError
          ? 'Invalid Route'
          : 'Sorry, an unexpected error has occurred.'}
      </p>
      {isRouteError && (
        <Link to='/' className='bg-green-300 px-4 py-2 rounded-md mt-8'>
          Homepage
        </Link>
      )}
    </>
  );
};

export default ErrorPage;
