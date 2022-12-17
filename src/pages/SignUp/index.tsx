import React, { useCallback, useRef, useState } from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container, Content } from "./styles";
import meTime from "../../assets/mg_time.jpg";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Form } from "@unform/web";
import * as yup from "yup";
import { FormHandles } from "@unform/core";
import ValidateErrors from "../../utils/validateErrors";

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [buttonIsLock, setButtonIsLock] = useState(true);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = yup.object().shape({
        user: yup.string().required("Nome é obrigatório"),
        email: yup
          .string()
          .required("E-mail é obrigatório")
          .email("Digite um e-mail válido"),
        password: yup.string().min(8).required("Senha é obrigatória"),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (errs) {
      setButtonIsLock(true);

      const erros = ValidateErrors(errs as yup.ValidationError);

      formRef.current?.setErrors(erros);
    }
    return;
  }, []);

  return (
    <>
      <Container>
        <Content>
          <h1>Faça seu log in.</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="user" icon={AiOutlineUser} title="Nome" />
            <Input name="email" icon={AiOutlineMail} title="E-mail" />
            <Input
              name="password"
              icon={RiLockPasswordLine}
              type="password"
              title="Senha"
            />
            <Button type="submit">Cadastrar</Button>
          </Form>
        </Content>

        <img src={meTime} alt="" />
      </Container>
    </>
  );
};

export default SignUp;
