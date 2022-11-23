import styled from "styled-components";

export const Content = styled.div`
  height: 100vh;
  color: #fafafa;
`;

export const BuilderMenu = styled.div`
  background-color: #4d5382;
  max-width: 700px;
  height: 100%;
  border-radius: 0px 6px;
  text-align: center;
  padding-top: 10px;
`;

export const FormContainer = styled.div`
  padding-top: 25px;

  form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    padding: 0px 25px 0px 25px;

    h2 {
      width: 100%;
      text-align: left;
      margin: 25px 95% 10px 0px;
      color: #4d5382;
      background-color: white;
    }
  }
`;
