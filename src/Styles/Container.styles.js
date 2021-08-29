import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: papayawhip;
  position: static;
  padding: 30px;
  background-image: linear-gradient(
    56deg,
    #ff6000 0%,
    #f58e33 25%,
    #f7bf67 75%,
    #ffd2b6
  );
`;

export const CalcFrame = styled.div`
  width: 400px;
  height: 450px;
  border: 1px solid black;
  padding: 12px;
  margin: 0 auto 20px auto;
  background-color: black;
  box-shadow: 5px 5px 10px black;
  border-radius: 18px;
  position: relative;
  display: inline-block;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  height: 10%;
  padding: 0.5rem;
  margin: 5px auto;
`;

export const ContainerVisor = styled(ButtonContainer)`
  width: 100%;

  .History {
    position: absolute;
    cursor: pointer;
    right: 15px;
    top: 3px;
    color: white;
  }
`;

export const AdvCalcFrame = styled(CalcFrame)`
  transform: translateY(0);
`;
