import React from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Background, Container, Content } from "./styles";
import meTime from "../../assets/mg_time.jpg";

const SignUp: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <h1>Faça seu log in.</h1>
          <form action="submit">
            <Input title="Nome" />
            <Input title="E-mail" />
            <Input title="Senha" />
            <Button> Entrar </Button>
          </form>
        </Content>

        <img src={meTime} alt="" />
      </Container>
    </>
  );
};

export default SignUp;
