import React from "react";
import { Container } from "./styles";
import meTime from "../../assets/mg_time.jpg";

const SignUp: React.FC = () => {
  return (
    <>
      <Container>
        <img src={meTime} alt="signUp_pic" />

        <div>
          <h1>Criar novo cadastro.</h1>

          <form action="submit"></form>
        </div>
        {/* <div></div> */}
      </Container>
    </>
  );
};

export default SignUp;
