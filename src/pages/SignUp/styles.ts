import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: relative;
  flex-direction: row;
  filter: brightness(100%) saturate(80%);
  div {
    width: 100vw;
    height: 100vh;
    bottom: 0;

    form {
    }

    h1 {
      height: fit-content;
      position: relative;
      top: 15%;
      font-family: "Domine", serif;
      font-size: 50px;
    }
  }
`;
