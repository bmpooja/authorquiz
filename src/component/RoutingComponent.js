import React from "react";
import { Route } from "react-router-dom";
//import {colors} from 'index.js'

export const Characters = {
  "lady-glasses":
    "https://s.pluralsight.com/authorkit/img/People/Gray/Geek_Female_Circle_Gray.png",
  "tie-guy":
    "https://s.pluralsight.com/authorkit/img/People/Gray/Male_1_Circle_Gray.png"
};

export function Character({ match}) {
  // const {match:{params}} = this.props
  // console.log(params)
  console.log("char :" +Characters);
  console.log("match  : " + JSON.stringify(match.params));

   const imgUrl = JSON.stringify(Characters).replace(
    "./Gray/",
        match.params.colors
 );
  console.log("img URL :" +imgUrl);
  return (
    <div>
      <img src={imgUrl} alt="lady"></img>{" "}
    </div>
  );
}
export const Dashboard = () => (
  <div style={{ width: "400px", height: "400px",backgroundColor: "azure" }}>
    <div className="cell">
      <Route Path="/top/left/:character/:colors" component={Character} />
    </div>
    <div className="cell">
      <Route Path="/top/right/:character/:colors" component={Character} />
    </div>
    <div className="cell">
      <Route Path="/bottom/left/:character/:colors" component={Character} />
    </div>
    <div className="cell">
      <Route Path="/bottom/right/:character/:colors" component={Character} />
    </div>
  </div>
);
