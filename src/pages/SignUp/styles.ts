import styled from "styled-components";
import meTime from "../../assets/mg_time.jpg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  input,
  button {
    font-size: 18px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${meTime}) no-repeat center;
  background-size: cover;
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
