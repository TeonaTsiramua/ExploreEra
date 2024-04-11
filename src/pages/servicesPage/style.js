import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 5.5rem clamp(2rem, 8vw, 10.625rem) 0 clamp(2rem, 8vw, 10.625rem);
  gap: 1rem;

  @media (min-width: 800px) {
    gap: 2rem;
  }
`;
