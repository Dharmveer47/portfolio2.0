import React from "react";
import Landing from "./pages/Landing";
import { Globlestyle } from "./styles/globle.styled";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Globlestyle />
      <Landing />
    </div>
  );
};

export default App;
