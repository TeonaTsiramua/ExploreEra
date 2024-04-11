import styled from 'styled-components';

export const HeroContainer = styled.div`
  background: url('/assets/hero.png') no-repeat center;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  color: hsl(var(--white));
`;

export const H1 = styled.h1`
  text-transform: uppercase;
  font-size: var(--fs-800);
  font-weight: 600;
`;

export const P = styled.p`
  font-size: var(--fs-700);
  font-weight: 500;
`;
