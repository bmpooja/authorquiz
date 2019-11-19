import React from "react";
var _ = require("lodash");

export default function ReactDataFlow({ noOfButtons, OnSelection }) {
  const makeButtons = v => (
    <button key={v} id={v} onClick={event => OnSelection("you pressed :",event.target.id,"th button")}>
      {" "}
      Click me {" "}
    </button>
  );
  return <div>{_.range(1, noOfButtons + 1).map(makeButtons)}</div>;
}


