import { Outlet } from 'react-router-dom';
import Header from './shared/header/Header';
import Footer from './shared/footer/Footer';
import { useEffect, useState } from 'react';
import Loader from './shared/loader/Loader';

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);
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
