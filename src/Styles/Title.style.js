import styled from "styled-components";

export const Title = styled.h1`
  color: #83001f;
  font-size: 2rem;
  text-shadow: 5px 6px 8px #2f2d2d;
  margin: 1rem auto 1.5rem auto;
  font-family: "Libertinus Keyboard", sans-serif;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
  @media (max-width: 380px) {
    font-size: 1.5rem;
  }
`;

export const Visor = styled.input`
  width: 80%;
  height: 100%;
  background-color: #dedbdb;
  color: firebrick;
  padding: 4px;
  border-radius: 25px;
  margin: 1rem auto 1rem auto;
  font-family: "HandelGothic TL", sans-serif;
  font-size: 22px;
  overflow: auto hidden;
  line-height: 40px;
`;
