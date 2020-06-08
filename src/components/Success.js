import React from "react";

const Reset = ({ winner }) => (
  <>
    <h2 className="alert alert-success">
      {(winner === "") ? <br /> : `Player ${winner} wins`}
    </h2>
    <hr />
  </>
)

export default Reset;

