import React from "react";
import Input from "../../Components/Input";
import { TextArea } from "../../Components/TextArea";
import { Content, BuilderMenu, FormContainer } from "./styles";

const MainPage: React.FC = () => {
  return (
    <Content>
      <BuilderMenu>
        <h1>Create your Card</h1>

        <FormContainer>
          <form action="submit">
            <Input placeHolder="Title" />
            <Input placeHolder="Owner" />

            <h2>Note</h2>
            <TextArea />
          </form>
        </FormContainer>
      </BuilderMenu>
    </Content>
  );
};

export default MainPage;
