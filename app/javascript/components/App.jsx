import React from "react";

import { Router } from "@reach/router";
import Welcome from "../views/Welcome";
import Leaderboard from "../views/Leaderboard";
import Game from "../components/Game";
import Characters from "../views/Characters";

const App = () => {
  return (
    <>
      <Router>
        <Welcome path="/" />
        <Leaderboard path="/leaderboard" />
        <Game path="/game" />
        <Characters path="/characters" />
      </Router>
    </>
  );
};

export default App;
