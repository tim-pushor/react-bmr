import React from "react";
import Header from "./Components/Header/Header";
import MainContent from "./Components/MainContent/MainContent";
import Footer from "./Components/Footer/Footer";

import { ResultsContextProvider } from "./store/results-context";

import "./App.css";

function App() {
  return (
    <ResultsContextProvider>
    <React.Fragment>
      <Header />
      <MainContent />
      <Footer />
    </React.Fragment>
    </ResultsContextProvider>
  );
}

export default App;
