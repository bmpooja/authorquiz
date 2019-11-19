import React from "react";
import { Route } from "react-router-dom";

export const Characters = {
  "lady-glasses":
    "https://s.pluralsight.com/authorkit/img/People/Gray/Geek_Female_Circle_Gray.png",
  "tie-guy":
    "https://s.pluralsight.com/authorkit/img/People/Gray/Male_1_Circle_Gray.png"
};

export function Character({ match }) {
  // const {match:{params}} = this.props
  // console.log(params)
  console.log("char :" + JSON.stringify(Characters));
  console.log("test : " +{match});

  const imgUrl = Characters[match.params.character].replace(
    "./Gray/",
    match.params.colors
  );
  console.log("img :" + imgUrl);
  return (
    <div>
      <img src={imgUrl}></img>{" "}
    </div>
  );
}
export const Dashboard = () => (
  
  <div style={{ width: "400px", height: "400px" }}>
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
