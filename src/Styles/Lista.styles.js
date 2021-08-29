import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-end;
  position: absolute;
  right: 0;
  top: 3px;
  color: #fff;
  background-color: #525252b3;
  padding: 3px;
  font-size: 13px;
  padding: 0;
  width: 20%;
  overflow-y: hidden;
  transform: translateX(50px);
  border-radius: 10px;
  z-index: 1;

  li {
    list-style: decimal;
    width: 80%;
  }

  span {
    cursor: pointer;
    font-size: 15px;
    color: #fff;
    font-weight: 600;
    text-decoration: underline;
    margin-right: 10px;
  }
`;
