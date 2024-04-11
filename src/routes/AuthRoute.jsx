import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function AuthRoute({ children }) {
  const { isLoggedIn } = useAuth();

  return !isLoggedIn ? children : <Navigate to='/' />;
}

export default AuthRoute;
