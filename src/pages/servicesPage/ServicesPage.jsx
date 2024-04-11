import { Outlet } from 'react-router-dom';
import Nav from '../../components/servicesPage/nav/Nav';

import { Container } from './style';

const ServicesPage = () => {
  return (
    <Container>
      <Nav />
      <Outlet />
    </Container>
  );
};
export default ServicesPage;
