import React from "react";
import Header from "./Components/Header/Header";
import MainContent from "./Components/MainContent/MainContent";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <MainContent />
      <Footer />
    </React.Fragment>
  );
}

export default App;
