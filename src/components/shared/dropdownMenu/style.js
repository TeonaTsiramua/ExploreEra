import styled, { keyframes, css } from 'styled-components';

// Define keyframes for the animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background-color: hsl(var(--white));
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  padding: clamp(0.8rem, 2.5vw, 2rem) clamp(1.25rem, 2.5vw, 3.125rem);
  font-size: clamp(16px, 5vw, 20px);

  @media (min-width: 430px) {
    border-radius: 12px;
    font-size: clamp(16px, 2.5vw, 20px);
  }

  @media (min-width: 800px) {
    font-size: var(--fs-link);
    border-radius: 20px;
  }

  ${(props) =>
    props.$secondary &&
    css`
      background-color: transparent;
      padding: 0;
      font-size: clamp(12px, 4vw, 20px);
      gap: 0.2rem;

      @media (min-width: 800px) {
        font-size: clamp(12px, 2vw, 20px);
        border-radius: 20px;
      }
    `}
`;

export const DropdownMenu = styled.div`
  background-color: hsl(var(--white));
  position: absolute;
  width: 100%;
  max-height: 25rem;
  top: 75%;
  left: 0;
  padding: 1rem clamp(1.25rem, 2.5vw, 3.125rem);
  font-size: clamp(16px, 5vw, 20px);

  border-radius: 0 0 8px 8px;
  overflow-y: scroll;
  z-index: 1;

  opacity: ${(props) => (props.open ? '1' : '0')};
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  animation: ${(props) => (props.open ? fadeIn : fadeOut)} 0.3s linear;

  @media (min-width: 430px) {
    border-radius: 0 0 12px 12px;
    font-size: clamp(16px, 2.5vw, 20px);
  }

  @media (min-width: 800px) {
    font-size: var(--fs-link);
    border-radius: 0 0 20px 20px;
  }

  /* width */
  &::-webkit-scrollbar {
    width: 8px;
    min-height: 70px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: hsl(var(--secondary-1), 0.5);
    border-radius: 8px;
    margin: 12px 0;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: hsl(var(--secondary-1));
    border-radius: 12px;
    outline: 1px solid white;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: hsl(var(--secondary-3));
    cursor: pointer;
  }

  ${(props) =>
    props.$secondary &&
    css`
      background-color: hsl(var(--background));
      padding: 0;
      top: 100%;
      overflow: hidden;
      font-size: clamp(12px, 4vw, 20px);
    `}
`;

export const DropdownItem = styled.div`
  padding: 15px 0;
  cursor: pointer;
  border-top: 1px solid hsl(var(--clr-text-1), 0.2);
  &:hover {
    color: hsl(var(--primary-2));
  }
`;

export const Img = styled.img`
  height: clamp(6px, 1.5vw, 12px);
  margin-left: 0.3rem;

  transform: ${(props) => (props.open ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease-in-out;
`;
