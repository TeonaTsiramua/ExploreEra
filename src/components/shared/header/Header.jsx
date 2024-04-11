import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import {
  HeaderContainer,
  DesktopNav,
  Ul,
  Img,
  UserImg,
  StyledLink,
  H2,
  SigningContainer,
  MobileNavContainer,
  MobileNavToggle,
  MobileNavMenu,
  MobileNavLink,
  MenuIcon,
  CloseIcon,
  P,
} from './style';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const auth = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Close the mobile menu when navigating to another page
    setShowMenu(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const { firstName, photoUrl } = auth.signUpData || {};

  return (
    <HeaderContainer
      ref={menuRef}
      className={!scrolled && location.pathname === '/' && 'transperent'}
    >
      <StyledLink to={'/'}>
        <H2>ExploreEra</H2>
      </StyledLink>

      <DesktopNav>
        <Ul>
          <StyledLink to={'/'}>Home</StyledLink>
          <StyledLink to={'/'}>About us</StyledLink>
          <StyledLink to={'/'}>Blogs</StyledLink>
          <StyledLink to={'/services'}>Our services</StyledLink>
          <StyledLink to={'/'}>Our offers</StyledLink>
        </Ul>
        <div>
          {!auth.isLoggedIn ? (
            <Img onClick={toggleMenu} src='/assets/user.png' alt='user' />
          ) : (
            <UserImg
              onClick={toggleMenu}
              src={photoUrl || '/assets/user.png'}
              alt='user'
            />
          )}

          {showMenu && (
            <SigningContainer>
              {!auth.isLoggedIn ? (
                <>
                  <StyledLink to={'/sign-in'}>Sign in</StyledLink>
                  <hr />
                  <StyledLink to={'/sign-up'}>Sign up</StyledLink>
                  <hr />
                </>
              ) : (
                <>
                  <P>Hello {firstName}</P>
                  <hr />
                  <StyledLink to={'/'} onClick={() => auth.logout()}>
                    Sign out
                  </StyledLink>
                  <hr />
                </>
              )}
            </SigningContainer>
          )}
        </div>
      </DesktopNav>

      <MobileNavContainer>
        <MobileNavToggle onClick={toggleMenu}>
          {!showMenu ? (
            <MenuIcon src='/assets/burger.png' alt='menu' />
          ) : (
            <CloseIcon src='/assets/close.png' alt='menu' />
          )}
        </MobileNavToggle>
        {showMenu && (
          <MobileNavMenu>
            {!auth.isLoggedIn ? (
              <>
                <MobileNavLink to={'/sign-in'}>Sign in</MobileNavLink>
                <MobileNavLink to={'/sign-up'}>Sign up</MobileNavLink>{' '}
              </>
            ) : (
              <>
                <P>Hello {firstName} </P>
                <MobileNavLink to={'/'} onClick={() => auth.logout()}>
                  Sign out
                </MobileNavLink>
              </>
            )}

            <hr />
            <MobileNavLink to={'/'}>Home</MobileNavLink>
            <MobileNavLink to={'/'}>About us</MobileNavLink>
            <MobileNavLink to={'/'}>Blogs</MobileNavLink>
            <MobileNavLink to={'/services'}>Our services</MobileNavLink>
            <MobileNavLink to={'/'}>Our offers</MobileNavLink>
          </MobileNavMenu>
        )}
      </MobileNavContainer>
    </HeaderContainer>
  );
};
export default Header;
