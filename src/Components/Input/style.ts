import styled, { css } from "styled-components";

interface InputContainerProp {
  isFocus: boolean;
}

export const InputContainer = styled.div<InputContainerProp>`
  color: #dee2e6;
  border-bottom: 3px solid #dee2e6;

  height: 40px;

  display: flex;
  align-items: flex-end;
  margin-right: 15px;

  input {
    color: #dee2e6;
    font-size: 20px;
  }

  ${props =>
    props.isFocus &&
    css`
      border-color: #658e9c;
    `}
`;
