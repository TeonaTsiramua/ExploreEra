import { createContext, useState, useContext, useEffect } from 'react';
import Loader from '../components/shared/loader/Loader';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signUpData, setSignUpData] = useState(null);
  const [isAgreed, setIsAgreed] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', false);
  };

  useEffect(() => {
    const storedSignUpData = localStorage.getItem('signUpData');
    if (storedSignUpData) {
      setSignUpData(JSON.parse(storedSignUpData));
      setIsAgreed(true);
    }

    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedIsLoggedIn) {
      setIsLoggedIn(storedIsLoggedIn === 'true');
    }

    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        signUpData,
        setSignUpData,
        isAgreed,
        setIsAgreed,
      }}
    >
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
