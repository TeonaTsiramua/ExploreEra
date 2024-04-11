import { ModalButton, ModalContainer, ModalOverlay } from './style';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ModalOverlay open={isOpen} onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalButton onClick={onClose}>
          <img src='/assets/close.png' alt='close' />
        </ModalButton>

        <>{children}</>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
