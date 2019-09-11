import React from "react";

import { Link } from "@reach/router";

const Navbar = () => {
  return (
    <>
      <div>
        <Link to="leaderboard">Leaderboard</Link>
      </div>
      <div>
        <Link to="game">Game</Link>
      </div>
      <div>
        <Link to="characters">Characters</Link>
      </div>
    </>
  );
};

export default Navbar;
