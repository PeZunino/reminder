import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 45px;
  transition: background-color 0.2s;

  &:hover {
    box-shadow: 0 0 30px #ff9000;
  }
`;
