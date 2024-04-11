import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 0 0 clamp(2.5rem, 6vw, 10.625rem);

  @media (min-width: 800px) {
    padding: 0 clamp(2.5rem, 6vw, 10.625rem);
  }
`;
