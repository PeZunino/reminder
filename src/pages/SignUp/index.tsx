import React, { useCallback, useRef, useState } from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Background, Container, Content } from "./styles";
import organize from "../../assets/organize.jpg";
import time_mg from "../../assets/time_mg.jpg";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Form } from "@unform/web";
import * as yup from "yup";
import { FormHandles } from "@unform/core";
import ValidateErrors from "../../utils/validateErrors";

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = yup.object().shape({
        user: yup.string().required("Nome é obrigatório"),
        email: yup
          .string()
          .required("E-mail é obrigatório")
          .email("Digite um e-mail válido"),
        password: yup.string().min(8, "Senha de no mínimo 8 dígitos"),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (errs) {
      const erros = ValidateErrors(errs as yup.ValidationError);

      formRef.current?.setErrors(erros);
    }
    return;
  }, []);

  return (
    <>
      <Container>
        <Content>
          <h1>Sign up for your account</h1>

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
          <span>
            Already have an account? <a>Sign in</a>
          </span>
        </Content>
        <Background>
          <img src={organize} alt="" />
          <img src={time_mg} alt="" />
        </Background>
      </Container>
    </>
  );
};

export default SignUp;
