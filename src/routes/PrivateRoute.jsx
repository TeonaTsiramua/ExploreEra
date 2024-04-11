import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);

  return isLoggedIn ? children : <Navigate to='/' />;
}

export default PrivateRoute;
