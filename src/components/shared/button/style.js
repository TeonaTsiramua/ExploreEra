import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  background-color: hsl(var(--primary-1));
  color: hsl(var(--white));
  padding: 8px 20px;
  border-radius: 10px;
  font-size: var(--fs-button);

  @media (min-width: 430px) {
    padding: 10px 30px;
  }

  @media (min-width: 800px) {
    padding: 20px 40px;
    border-radius: 20px;
  }

  &:hover {
    background-color: hsl(var(--primary-2));
    color: hsl(var(--white));
  }

  ${(props) =>
    props.$primary &&
    css`
      font-size: 22px;
      padding: 15px 30px;

      @media (min-width: 430px) {
        padding: 15px 10px;
      }

      @media (min-width: 800px) {
        font-size: var(--fs-28);
      }
    `}

  ${(props) =>
    props.$secondary &&
    css`
      font-size: 20px;
      padding: 10px;
      background-color: hsl(var(--primary-3));
      color: hsl(var(--clr-text-1));

      @media (min-width: 430px) {
        font-size: 20px;
        padding: 10px;
      }

      @media (min-width: 800px) {
        font-size: clamp(16px, 1.5vw, 20px);
        padding: 10px 5px;
        border-radius: 10px;
      }
    `}

    ${(props) =>
    props.$secondary1 &&
    css`
      font-size: 18px;
      padding: 8.5px;

      @media (min-width: 430px) {
        font-size: 20px;
        padding: 10px;
      }

      @media (min-width: 800px) {
        font-size: clamp(16px, 1.5vw, 20px);
        padding: 10px 5px;
        border-radius: 10px;
      }
    `}

  &:disabled {
    color: hsl(var(--secondary-3));
    background-color: hsl(var(--primary-2));
    cursor: auto;
  }
`;
