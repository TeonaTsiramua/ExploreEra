import { useLocation } from 'react-router-dom';

import { Outlet } from 'react-router-dom';
import Header from './shared/header/Header';
import Footer from './shared/footer/Footer';
import { useEffect, useState } from 'react';
import Loader from './shared/loader/Loader';

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Start loading when location changes
    setLoading(true);

    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500); // 2 seconds for example

    return () => clearTimeout(timeout);
  }, [location]);
  return loading ? (
    <Loader />
  ) : (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
