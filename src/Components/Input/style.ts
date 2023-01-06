import styled, { css } from "styled-components";
import Tooltip from "../Tooltip";

interface InputContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  height: 50px;
  padding: 10px;
  width: 100%;

  border: 3px solid #dfe1e6;
  border-radius: 5px;
  color: #5e6c84;

  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
  }

  input {
    color: inherit;
    align-items: center;
    width: 100%;
  }

  ${props =>
    !props.isErrored &&
    css`
      :hover {
        background-color: #edeef2;
      }
    `}

  ${props =>
    props.isFocused &&
    css`
      border: 2px black solid;
      background-color: #edeef2;
      color: black;
    `}

  ${props =>
    props.isFilled &&
    css`
      background-color: #edeef2;
      color: black;
    `}

    ${props =>
    props.isErrored &&
    css`
      border: 2px #cb3436 solid;
      background-color: #ffd7d7;
      color: #cb3436;
    `}
`;

export const Error = styled(Tooltip)`
  margin-left: 16px;
  height: 20px;
  svg {
    margin: 0px;
  }
  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
