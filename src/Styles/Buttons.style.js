import styled from "styled-components";

export const Button = styled.button`
  width: 15%;
  height: 100%;

  margin: 5px;
  padding: 5px 10px;

  border-radius: 2rem;

  box-shadow: 3px 5px 5px #adaaaa;

  background-image: linear-gradient(
    90deg,
    #00000078 0%,
    gray 5%,
    white 50%,
    gray 95%,
    #00000078 100%
  );
  font-size: 2rem;

  &:hover {
    filter: contrast(80%);
    box-shadow: 2px 4px 4px #adaaaa;
    transform: translateY(2px);
  }

  &:active {
    box-shadow: 0px 0px 2px #adaaaa;
    transform: translateY(4px);
  }
`;

export const EqualButton = styled(Button)`
  width: 40%;
  text-align: center;
  font-size: 2rem;
`;
export const BlankButton = styled(Button)`
  width: 40%;
  text-align: center;
  font-size: 2rem;
  background-color: orange;
  background-image: linear-gradient(
    90deg,
    #0000 0%,
    orange 5%,
    white 50%,
    orange 95%,
    #0000 100%
  );

  font-weight: 800;
`;
export const AdvButton = styled(Button)`
  height: 10%;
  font-size: 10px;
  margin: 0;
  padding: 5px;
  align-self: flex-start;
  display: block;
`;

export const Button2 = styled(Button)`
  font-size: 1rem;
  img {
    width: 34px;
    height: 35px;
  }
`;

export const ModalCloseButton = styled(Button)`
  height: 10%;
  width: 20%;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1rem;
`;
