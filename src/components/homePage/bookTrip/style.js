import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 0;

  @media (min-width: 800px) {
    background-color: hsl(var(--secondary-1));
    padding: 3.125rem clamp(2.5rem, 6vw, 10.625rem);
  }
`;

export const H2 = styled.h2`
  font-size: var(--fs-h2);
  font-weight: 500;
  padding-left: clamp(2.5rem, 6vw, 10.625rem);

  @media (min-width: 800px) {
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  background-color: hsl(var(--secondary-1));
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem clamp(2.5rem, 6vw, 10.625rem);

  @media (min-width: 800px) {
    padding: 0;
  }
`;

export const Section = styled.div`
  display: grid;
  gap: 1rem;
  @media (min-width: 430px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 800px) {
    column-gap: clamp(1rem, 2.5vw, 5rem);
  }
`;
