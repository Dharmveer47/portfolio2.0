import React, { useEffect } from "react";
import Landing from "./pages/Landing";
import { Globlestyle } from "./styles/globle.styled";

import * as cursoreffects from "cursor-effects";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Globlestyle />
        <Landing />
      </BrowserRouter>
    </div>
  );
};

export default App;
