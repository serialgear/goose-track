// import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
// import { selectAuthToken } from 'redux/auth/auth.selectors';

export const PrivateRoute = () => {
  // const token = useSelector(selectAuthToken);
  const token = true;
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};
