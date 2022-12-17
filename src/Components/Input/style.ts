import styled, { css } from "styled-components";

interface InputContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  color: #b3b2b5;
  background-color: #737177;

  border-radius: 15px;
  height: 50px;
  padding: 10px;
  margin-top: 20px;

  svg {
    margin-right: 10px;
  }

  input {
    color: white;
    align-items: center;

    width: 100%;
  }

  ${props =>
    props.isFocused &&
    css`
      border: 2px black solid;
      background-color: #2c2b2f;
    `}

  ${props =>
    props.isFilled &&
    css`
      border: 2px black solid;
      background-color: #2c2b2f;
      color: white;
    `}

    ${props =>
    props.isErrored &&
    css`
      border: 2px #cb3436 solid;
      background-color: #2c2b2f;
      color: #cb3436;
    `}
`;
