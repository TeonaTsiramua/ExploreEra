import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
