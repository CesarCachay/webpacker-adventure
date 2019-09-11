import React from "react";

import { Link } from "@reach/router";

const Navbar = () => {
  return (
    <>
      <div>
        <Link to="leaderboard">Leaderboard</Link>
      </div>
      <Link to="game">Game</Link>
    </>
  );
};

export default Navbar;
