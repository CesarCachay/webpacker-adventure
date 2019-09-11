import React from "react";
import { Link } from "@reach/router";

const Leaderboard = () => {
  return (
    <>
      <div>
        <h4>Your position is: ...</h4>
      </div>
      <div>
        <h5>HELLO FROM THE LEADERBOARD</h5>
      </div>
      <Link to="/">Click here to go back Home</Link>
    </>
  );
};

export default Leaderboard;
