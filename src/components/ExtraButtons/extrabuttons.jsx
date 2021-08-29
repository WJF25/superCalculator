import {
  AdvButton,
  Button,
  Button2,
  EqualButton,
} from "../../Styles/Buttons.style";
import {
  AdvCalcFrame,
  ButtonContainer,
  ContainerVisor,
} from "../../Styles/Container.styles";
import { Visor } from "../../Styles/Title.style";
import { FaSquareRootAlt } from "react-icons/fa";
import elevado from "../../assets/elevado.png";
import { Operations } from "../../lib/operations/operations";
import { Modal } from "../Modal/modals";
import { useCalc } from "../../Provider/Calc";

export const AdvancedCalc = () => {
  const { setShow2, setValue, value, createList } = useCalc();

  const handleClick = (clique) => {
    setValue(value + clique);
  };

  const handleClick2 = () => {
    if (value !== "") {
      const operacaum = Operations.comparador(value);

      if (operacaum !== "") {
        const arg = value.split("_");
        setValue(Operations[operacaum](arg));
      } else {
        return alert(
          "Primeiro faça a operação e depois clique nas teclas especiais"
        );
      }
    } else {
      return null;
    }
    createList();
  };

  return (
    <AdvCalcFrame>
      <AdvButton onClick={() => setShow2(true)}>Voltar</AdvButton>
      <ContainerVisor>
        <Visor
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </ContainerVisor>
      <ButtonContainer>
        <Button2 onClick={() => handleClick("_cos")}>Cos</Button2>
        <Button2 onClick={() => handleClick("_sen")}>Sen</Button2>
        <Button2 onClick={() => handleClick("_tan")}>Tan</Button2>
      </ButtonContainer>
      <ButtonContainer>
        <Button2 onClick={() => handleClick("_abs")}>Abs</Button2>
        <Button2 onClick={() => handleClick("_raiz")}>
          <FaSquareRootAlt />
        </Button2>
        <Button2 onClick={() => handleClick("_pow")}>
          <img alt=" " src={elevado} />
        </Button2>
      </ButtonContainer>
      <ButtonContainer>
        <Button onClick={() => handleClick(",")}>,</Button>
        <Modal />
        <Button2></Button2>
      </ButtonContainer>
      <ButtonContainer>
        <Button2></Button2>
        <Button2></Button2>
        <Button2></Button2>
      </ButtonContainer>
      <ButtonContainer>
        <EqualButton onClick={handleClick2}>=</EqualButton>
      </ButtonContainer>
    </AdvCalcFrame>
  );
};
