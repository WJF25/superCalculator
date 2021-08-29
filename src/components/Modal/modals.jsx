import { useState } from "react";
import { Button2, ModalCloseButton } from "../../Styles/Buttons.style";
import { StyledModal } from "./modal.styles";

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  function toggleModal(e) {
    setOpacity(0);
    setIsOpen(!isOpen);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(2);
    }, 100);
  }

  function beforeClose() {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  }

  return (
    <>
      <Button2 onClick={toggleModal}>?</Button2>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        <p>I am a modal!</p>
        <ModalCloseButton onClick={toggleModal}>fechar</ModalCloseButton>
      </StyledModal>
    </>
  );
};
