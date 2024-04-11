import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: var(--fs-label);
  color: hsl(var(--clr-text-1), 0.7);
  padding-left: 20px;
`;

export const Input = styled.input`
  padding: 13.5px 20px;
  border: 1px solid hsl(var(--primary-1));
  border-radius: 10px;
  width: clamp(200px, 80vw, 280px);

  @media (min-width: 430px) {
    width: 400px;
  }

  &::placeholder {
    font-size: var(--fs-ph);
  }

  &:focus {
    outline: 1px solid hsl(var(--primary-2));
  }
`;

export const Error = styled.p`
  color: hsl(var(--clr-text-3));
  font-size: var(--fs-label);
  max-width: 280px;
  padding: 0 20px;

  @media (min-width: 430px) {
    max-width: 400px;
  }
`;
