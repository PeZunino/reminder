import styled from "styled-components";

export const Container = styled.div`
  font-family: "Nunito", serif;

  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const Background = styled.div`
  height: min-content;
  width: 100%;
  position: fixed;
  display: inline-flex;
  justify-content: space-between;
  align-items: end;
  bottom: 0;
  z-index: -999;

  img {
    width: 25vw;
  }
`;

export const Content = styled.div`
  height: 100%;
  max-height: 500px;
  width: 100%;
  min-width: 500px;
  max-width: 25vw;

  border-radius: 10px;
  margin: 0 auto;
  margin-top: 50px;
  padding-top: 45px;

  background-color: #ffff;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 30px;

  form {
    width: 350px;

    button,
    input {
      font-size: 15px;
      font-family: "Nunito", serif;
    }

    div {
      margin-bottom: 20px;
    }
  }

  a {
    color: #2b88ee;
  }
`;
