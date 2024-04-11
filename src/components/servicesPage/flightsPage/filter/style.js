import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Div = styled.div`
  display: grid;
  gap: 0.7rem;

  @media (min-width: 430px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr 15%;
  }
`;

export const Input = styled.input`
  padding: 13.5px 20px;
  border: 1px solid hsl(var(--primary-1));
  border-radius: 12px;
  width: 100%;

  &::placeholder {
    font-size: var(--fs-ph);
  }

  &:focus {
    outline: 1px solid hsl(var(--primary-2));
  }

  @media (min-width: 800px) {
    border-radius: 20px;
  }
`;
