import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div>
    <h1>Home</h1>
    <p>A fair comparison of the South African banking system</p>
    <hr />
    <Link to="/bank" role="button">
      View Banks
    </Link>
  </div>
);
