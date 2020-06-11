import React from "react";

const Reset = ({ handleReset }) => (
  <div className="reset">
    <button className="btn btn-danger reset" onClick={handleReset}>Reset</button>
  </div>
)

export default Reset;
