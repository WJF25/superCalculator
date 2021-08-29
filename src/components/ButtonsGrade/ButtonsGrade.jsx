import { BlankButton, Button, EqualButton } from "../../Styles/Buttons.style";
import { ButtonContainer } from "../../Styles/Container.styles";
import { Operations } from "../../lib/operations/operations";
import { CgMathDivide } from "react-icons/cg";
import { useCalc } from "../../Provider/Calc";

export const ButtonsGrade = () => {
  const { setValue, value, createList } = useCalc();
  const handleClik = (clique) => {
    setValue(value + clique);
  };

  const handleClikSymbols = () => {
    if (value === "") {
      return null;
    } else if (value.endsWith("%")) {
      if (
        value.includes("+") ||
        value.includes("X") ||
        value.includes("/") ||
        value.includes("-")
      ) {
        return setValue(Operations["%"](value));
      } else {
        return alert("formato correto num1*num2% ou num1+num2%");
      }
    } else {
      const operacaum = Operations.comparador(value);
      if (operacaum === "") {
        return null;
      } else {
        const arg = value.split(operacaum);
        setValue(Operations[operacaum](arg));
      }
    }

    createList();
  };

  return (
    <>
      <ButtonContainer>
        <Button onClick={() => handleClik("7")}>7</Button>
        <Button onClick={() => handleClik("8")}>8</Button>
        <Button onClick={() => handleClik("9")}>9</Button>
        <Button onClick={() => handleClik("/")}>
          <CgMathDivide />
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button onClick={() => handleClik("4")}>4</Button>
        <Button onClick={() => handleClik("5")}>5</Button>
        <Button onClick={() => handleClik("6")}>6</Button>
        <Button onClick={() => handleClik("X")}>X</Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button onClick={() => handleClik("1")}>1</Button>
        <Button onClick={() => handleClik("2")}>2</Button>
        <Button onClick={() => handleClik("3")}>3</Button>
        <Button onClick={() => handleClik("-")}>-</Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button onClick={() => handleClik("0")}>0</Button>
        <Button onClick={() => handleClik(".")}>,</Button>
        <Button onClick={() => handleClik("%")}>%</Button>
        <Button onClick={() => handleClik("+")}>+</Button>
      </ButtonContainer>
      <ButtonContainer>
        <EqualButton onClick={handleClikSymbols}>=</EqualButton>
        <BlankButton
          onClick={() => {
            createList();
            setValue("");
          }}
        >
          AC
        </BlankButton>
      </ButtonContainer>
    </>
  );
};
