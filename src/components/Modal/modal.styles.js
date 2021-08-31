import styled from "styled-components";
import Modal, { BaseModalBackground } from "styled-react-modal";

export const StyledModal = Modal.styled`
  width:50%;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
  position:relative;
  border-radius:10px;

  article{
    padding:15px;
    width:80%;

    h3{
      color:red;
      margin: 10px;
      text-transform:capitalize;
      font-size:20px;
    }

    span{
      font-size:28px;
      font-weight:800;
    }

    .title{
      margin: 10px auto;
    }

    .conteudo{
      text-align:left;
    }

    .nothing{
      margin:22px auto;
      width:80%;      
      font-size:1.8rem;
    }
  }
  `;

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.5s ease-in-out;
`;
