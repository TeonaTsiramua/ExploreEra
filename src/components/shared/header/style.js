import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
   from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const HeaderContainer = styled.header`
  background-color: hsl(var(--secondary-2));
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem clamp(2rem, 8vw, 10.625rem);
  position: fixed;
  width: 100%;
  transition: background-color 0.3s ease;
  z-index: 10;

  &.transperent {
    background-color: transparent;
    color: white;
    transition: background-color 0.3s ease;
    transition: color 0.3s ease;
  }

  &.transperent img {
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%)
      hue-rotate(25deg) brightness(105%) contrast(101%);
    transition: filter 0.3s ease;
  }

  &.transperent img:hover {
    filter: invert(100%) sepia(100%) saturate(10000%) hue-rotate(25deg);
  }
`;

export const H2 = styled.h2`
  font-family: 'Kalnia', serif;
  font-weight: 500;
  font-size: var(--fs-900);
`;

export const DesktopNav = styled.nav`
  display: none;
  @media (min-width: 800px) {
    display: flex;
    gap: clamp(1.5rem, 2.5vw, 2.5rem);
  }
`;

export const Ul = styled.ul`
  display: flex;
  gap: clamp(1.5rem, 2.5vw, 2.5rem);
  align-items: center;
`;

export const StyledLink = styled(Link)`
  font-size: var(--fs-link);
  color: inherit;
  text-decoration: none;

  &:hover {
    color: hsl(var(--primary-2));
  }
`;

export const Img = styled.img`
  height: max-content;
  width: 1.458rem;
  cursor: pointer;

  &:hover {
    filter: invert(50%) sepia(56%) saturate(6954%) hue-rotate(13deg)
      brightness(88%) contrast(101%);
  }
`;

export const UserImg = styled.img`
  width: clamp(1.5rem, 2.5vw, 2.5rem);
  border-radius: 50%;
  aspect-ratio: 1;
  cursor: pointer;

  filter: none !important;
`;

export const SigningContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 30px 10px 30px;
  background-color: hsl(var(--white));
  color: hsl(var(--clr-text-1));

  border-radius: 10px;
  position: absolute;
  top: 90px;
  right: clamp(2rem, 7vw, 10rem);
  height: 164px;
  width: 267px;

  & > hr {
    border-top: 1px solid hsl(var(--primary-1));
    width: 100%;
  }

  animation: ${fadeIn} 0.5s ease-in;
`;

// Mobile Menu

export const MobileNavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 115px;
  right: 165px;

  @media (min-width: 430px) {
    top: 135px;
    right: 220px;
  }

  @media (min-width: 800px) {
    display: none;
  }
`;

export const MobileNavToggle = styled.div`
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 32px;
  width: 32px;
  bottom: 100px;
  left: 145px;
  z-index: 2;

  &:hover {
    filter: invert(50%) sepia(56%) saturate(6954%) hue-rotate(13deg)
      brightness(88%) contrast(101%);
  }

  @media (min-width: 430px) {
    bottom: 120px;
    left: 200px;
  }
`;

export const MenuIcon = styled.img`
  width: 24px;

  @media (min-width: 430px) {
    width: 30px;
  }
`;

export const CloseIcon = styled.img`
  width: 18px;
  height: 18px;
  filter: none !important;
`;

export const MobileNavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: hsl(var(--white));
  border-radius: 12px;
  width: 184px;
  height: 271px;
  padding: 20px 46px 20px 28px;
  position: absolute;

  @media (min-width: 430px) {
    width: 238px;
    height: 313px;
    padding: 20px 60px 20px 48px;
  }

  @media (min-width: 800px) {
    display: none;
  }

  & > hr {
    border-top: 1px solid hsl(var(--clr-text-1));
    width: 100%;
  }
`;

export const MobileNavLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 10px;
  color: hsl(var(--clr-text-1));
  font-size: var(--fs-link);

  &:hover {
    color: hsl(var(--primary-2));
  }
`;

export const P = styled.p`
  text-decoration: none;
  margin-bottom: 10px;
  color: hsl(var(--clr-text-1));
  font-size: var(--fs-link);

  @media (min-width: 800px) {
    font-size: var(--fs-link);
    color: inherit;
    text-decoration: none;
  }
`;
