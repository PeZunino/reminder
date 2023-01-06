import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: #2b88ee;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: white;
  width: 100%;
  font-weight: 500;
  filter: brightness(110%);
  transition: background-color 0.1s ease-out 0s;
  &:hover {
    filter: brightness(90%);
  }
`;
