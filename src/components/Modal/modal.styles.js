import styled from "styled-components";
import Modal, { BaseModalBackground } from "styled-react-modal";

export const StyledModal = Modal.styled`
  width:50vw;
  height: 30vh;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
  position:relative;
  border-radius:10px;
  `;

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.5s ease-in-out;
`;
