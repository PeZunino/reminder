/* eslint-disable react/prop-types */
import React, { InputHTMLAttributes } from "react";
import { InputContainer } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

const Input: React.FC<InputProps> = ({ title }) => {
  return (
    <InputContainer>
      <input type="text" placeholder={title} />
    </InputContainer>
  );
};

export default Input;
