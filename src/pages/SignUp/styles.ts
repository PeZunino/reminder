import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: stretch;
  /* filter: brightness(90%) saturate(80%); */
  /* 
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
  } */
`;

export const Background = styled.div`
  width: 50%;
  img {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 50%;
  background-color: #f0ffcb;
  h1 {
    position: relative;
    top: 15%;
    font-family: "Domine", serif;
    font-size: 50px;
    justify-content: center;
  }
`;
