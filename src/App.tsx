import React from "react";
import MainPage from "./pages/Main";
import { GlobalStyles } from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <MainPage />
      <GlobalStyles />
    </>
  );
};

export default App;
