import React from "react";

const Reset = ({ winner }) => (
  <h2 className="alert alert-success">
    {(winner === "") ? '' : `Player ${winner} wins`}
  </h2>
)

export default Reset;

