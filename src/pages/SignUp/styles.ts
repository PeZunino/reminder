import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background-color: #8b9ffe;

  input,
  button {
    font-size: 18px;
  }
  img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: auto;
    height: 700px;
  }
`;

export const Background = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  max-width: 750px;
  width: 100%;
  height: 800px;

  background-color: #434147;
  border-radius: 0 30px 30px 0;
  padding: 100px;

  margin: 10px 0 0 0;
  h1 {
    font-family: "Domine", serif;
    font-size: 70px;
    color: white;
    border-bottom: 15px;
    margin-bottom: 40px;
  }
  form {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding-right: 50px;
  }
`;
