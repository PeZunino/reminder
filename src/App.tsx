import React from "react";
import MainPage from "./pages/Main";
import SignUp from "./pages/SignUp";
import { GlobalStyles } from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      {/* <MainPage /> */}
      <SignUp />
      <GlobalStyles />
    </>
  );
};

export default App;
