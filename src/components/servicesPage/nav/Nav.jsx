import { useLocation } from 'react-router-dom';
import { NavContainer, StyledLink } from './style';

const Nav = () => {
  const location = useLocation();

  const isLinkActive = (path) => {
    const currentPath = location.pathname;
    if (path === '/services') {
      return currentPath === path;
    } else {
      return currentPath.startsWith(path);
    }
  };

  return (
    <NavContainer>
      <StyledLink
        className={isLinkActive('/services') && 'active'}
        to='/services'
      >
        Flights
      </StyledLink>
      <StyledLink
        className={isLinkActive('/services/stays') && 'active'}
        to='/services/stays'
      >
        Stays
      </StyledLink>
      <StyledLink
        className={isLinkActive('/services/rental') && 'active'}
        to='/services'
      >
        Car Rental
      </StyledLink>
      <StyledLink
        className={isLinkActive('/services/cruises') && 'active'}
        to='/services'
      >
        Cruises
      </StyledLink>
    </NavContainer>
  );
};
export default Nav;
