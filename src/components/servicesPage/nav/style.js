import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 800px) {
    width: 58%;
    margin-top: 3rem;
  }

  & > .active {
    background-color: hsl(var(--primary-1));
    color: hsl(var(--white));
  }

  & > .active:hover {
    background-color: hsl(var(--primary-1));
    color: hsl(var(--white));
  }
`;

export const StyledLink = styled(Link)`
  font-size: clamp(12px, 4vw, 24px);
  font-weight: 500;
  color: inherit;
  text-decoration: none;
  padding: clamp(0.3rem, 2vw, 1rem) clamp(0.1rem, 2vw, 2rem);
  border-radius: 10px;

  @media (min-width: 800px) {
    border-radius: 20px;
    font-size: var(--fs-link);
  }

  &:hover {
    background-color: hsl(var(--secondary-4));
  }
`;
