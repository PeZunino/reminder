import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { InputContainer } from "./style";
import { IconBaseProps } from "react-icons/lib";
import { useField } from "@unform/core";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ title, name, icon: Icon, ...rest }) => {
  const [isFocused, setFocus] = useState(false);
  const [isFilled, setFill] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const { clearError, defaultValue, error, fieldName, registerField } =
    useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  const handleBlur = useCallback(() => {
    setFocus(false);
    setFill(!!inputRef.current?.value);
  }, []);

  const handleFocus = useCallback(() => {
    setFocus(true);
  }, []);

  return (
    <InputContainer
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
    >
      <Icon size={25} />
      <input
        {...rest}
        ref={inputRef}
        onBlur={handleBlur}
        onFocus={handleFocus}
        type={rest && rest.type}
        placeholder={title}
      />
    </InputContainer>
  );
};

export default Input;
