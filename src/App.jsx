import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AppRoutes from "./routes/AppRoutes";
import { CApp, CMain } from "./styles/components";
import GlobalStyles from "./styles/globalStyles";

const App = () => {
  return (
    <CApp>
      <Header />
      <CMain>
        <AppRoutes />
      </CMain>
      <Footer />
      <GlobalStyles />
    </CApp>
  );
};

export default App;
