import React from "react";
import { Background, Container, Content } from "./styles";
import meTime from "../../assets/mg_time.jpg";

const SignUp: React.FC = () => {
  return (
    <>
      <Container>
        <Background>
          <img src={meTime} alt="metime" />
        </Background>
        <Content>
          <h1>Criar novo cadastro.</h1>
        </Content>
        {/* <div>

          <form action="submit"></form>
        </div> */}
        {/* <div></div> */}
      </Container>
    </>
  );
};

export default SignUp;
