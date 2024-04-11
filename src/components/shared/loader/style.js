import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

export const StyledLoader = styled.div`
  width: 30px;
  aspect-ratio: 0.577;
  color: #ff6700;
  display: grid;
  background: linear-gradient(currentColor 0 0) top / 100% 1px,
    linear-gradient(currentColor 0 0) bottom/100% 1px,
    linear-gradient(
        to bottom right,
        #0000 calc(50% - 2px),
        currentColor calc(50% - 1px),
        #0000 50%
      )
      top/100% calc(100% + 2px),
    linear-gradient(
        to bottom left,
        #0000 calc(50% - 2px),
        currentColor calc(50% - 1px),
        #0000 50%
      )
      top/100% calc(100% + 2px);
  background-repeat: no-repeat;
  animation: l17 4s infinite linear;

  &::before,
  &::after {
    content: '';
    grid-area: 1/1;
    background: inherit;
    border: inherit;
    animation: inherit;
  }
  &::after {
    animation-duration: 2s;
  }
  @keyframes l17 {
    100% {
      transform: rotate(1turn);
    }
  }
`;
