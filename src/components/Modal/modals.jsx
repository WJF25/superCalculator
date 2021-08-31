import { useState } from "react";
import { Button2, ModalCloseButton } from "../../Styles/Buttons.style";
import { StyledModal } from "./modal.styles";
import { sugestions } from "../../lib/operations/Random/sugestions";
import { useCalc } from "../../Provider/Calc";
import { AiFillCloseCircle } from "react-icons/ai";

export const Modal = () => {
  const { value } = useCalc();

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
      <Button2 open={sugestions[value] ? true : false} onClick={toggleModal}>
        ?
      </Button2>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        {sugestions[value] ? (
          <article>
            <h3>Curiosidade Sobre os números</h3>
            <span>{value}</span>
            <p className="title">{sugestions[value].title}</p>
            <p className="conteudo">{sugestions[value].conteudo}</p>
          </article>
        ) : (
          <article>
            <p className="nothing">Desse número não temos nada</p>
          </article>
        )}
        <ModalCloseButton onClick={toggleModal}>
          <AiFillCloseCircle />
        </ModalCloseButton>
      </StyledModal>
    </>
  );
};
