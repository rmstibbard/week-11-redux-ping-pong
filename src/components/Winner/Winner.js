import React from "react";

const Winner = ({ winner }) => (
  <>
    <h2 className="alert alert-success winner">
      {(winner === "") ? <br /> : `${winner} wins!!!`}
    </h2>
    <hr />
  </>
)

export default Winner;