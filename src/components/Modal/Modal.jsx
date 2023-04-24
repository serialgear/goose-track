import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import { CloseBtn, ModalContainer, Overlay } from './Modal.styled';

export const Modal = ({ children, onClose }) => {
  const memoKeyClose = useCallback(handleKeyClose, [handleKeyClose]);

  useEffect(() => {
    window.addEventListener('keydown', memoKeyClose);

    return () => {
      window.veEventListener('keydown', memoKeyClose);
    };
  }, [memoKeyClose]);

  function handleKeyClose(evt) {
    if (evt.code === 'Escape') {
      onClose();
    }
  }

  function handleClose(evt) {
    const { target, currentTarget } = evt;

    if (target === currentTarget) {
      onClose();
    }
  }

  function handleCloseBtn() {
    onClose();
  }

  return (
    <Overlay onClick={handleClose}>
      <ModalContainer>
        <CloseBtn onClick={handleCloseBtn}>
          <use href="../../images/sprite.svg#calendar-close-sf"></use>
        </CloseBtn>
        {children}
      </ModalContainer>
    </Overlay>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};
