import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: ${(props) => (props.open ? 'block' : 'none')};
  z-index: 11;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: hsl(var(--white));
  padding: 1rem;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 85%;
  max-height: 90%;
  overflow-y: auto;
`;

export const ModalButton = styled.button`
  width: 18px;
  height: 18px;
  align-self: flex-end;
`;
