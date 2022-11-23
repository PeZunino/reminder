/* eslint-disable react/prop-types */
import { InputHTMLAttributes, useCallback, useState } from "react";
import { InputContainer } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeHolder: string;
}
const Input: React.FC<InputProps> = ({ placeHolder }) => {
  const [focus, setFocus] = useState(false);

  const handleFocus = useCallback(() => {
    setFocus(true);
    console.log("focus", focus);
  }, []);

  const handleBlur = useCallback(() => {
    setFocus(false);
    console.log(focus);
  }, []);

  return (
    <InputContainer isFocus={focus}>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeHolder}
        type="text"
      />
    </InputContainer>
  );
};

export default Input;
