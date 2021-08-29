import { ButtonsGrade } from "../../components/ButtonsGrade/ButtonsGrade";
import { AdvancedCalc } from "../../components/ExtraButtons/extrabuttons";
import { Lista } from "../../components/histórico";
import { useCalc } from "../../Provider/Calc";
import { AdvButton } from "../../Styles/Buttons.style";
import {
  CalcFrame,
  Container,
  ContainerVisor,
} from "../../Styles/Container.styles";
import { Title, Visor } from "../../Styles/Title.style";

export const Calculator = () => {
  const { value, setValue, show, setShow, show2, setShow2 } = useCalc();

  return (
    <Container>
      <Title>Super Calculator</Title>
      {show2 ? (
        <CalcFrame>
          <AdvButton onClick={() => setShow2(false)}>Advanced Calc</AdvButton>
          <ContainerVisor>
            <Visor value={value} onChange={(e) => setValue(e.target.value)} />
            {show ? (
              <Lista />
            ) : (
              <p className="History" onClick={() => setShow(true)}>
                Histórico
              </p>
            )}
          </ContainerVisor>
          <ButtonsGrade />
        </CalcFrame>
      ) : (
        <>
          <CalcFrame>
            <AdvButton onClick={() => setShow2(false)}>Advanced Calc</AdvButton>
            <ContainerVisor>
              <Visor value={value} onChange={(e) => setValue(e.target.value)} />
              {show ? (
                <Lista />
              ) : (
                <p className="History" onClick={() => setShow(true)}>
                  Histórico
                </p>
              )}
            </ContainerVisor>
            <ButtonsGrade />
          </CalcFrame>
          <AdvancedCalc />
        </>
      )}
    </Container>
  );
};
