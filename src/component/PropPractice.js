import React from "react";
import ClassComponent from "./ClassComponent";
import PropTypes from "prop-types";
import AuthorQuiz from "./AuthourQuiz";
import PropOutsideComp from "./PropOutsideComp";
import ReactDataFlow from "./ReactDataFlow";
import InnerHtmlComp from "./InnerHtmlComp";
import { ConditionaldisplayComp, Sum } from "./ConditionalDisplayComp";
import EventComponet from "./EventComponet";
import Reloader from "./Reloader";
import EvenClickComponent from "./EvenClickComponent";
import FormComponent from "./FormComponent";
import IdentityFormComponent from './IdentityFormComponent'

export default function PropPractice(props) {
  const state = {
    showSum: false
  };

  setInterval(() => {
    state.showSum = !state.showSum;
    //{{Sum}}
  }, 2000);

  return (
    <div>
      <h1>
        {props.a}+{props.b} = {props.a + props.b}
      </h1>
      <ClassComponent />
      <AuthorQuiz />
      <PropOutsideComp
        handleClick={letter => {
          console.log(`${letter} got clicked`);
        }}
      />
      <ReactDataFlow noOfButtons={99} OnSelection={console.log} />
      <InnerHtmlComp dangerContainer="<strong>Hello from danger</strong>" />
      <ConditionaldisplayComp isVisible={state.showSum}>
        <h1>A Sum</h1>
        <Sum a={4} b={3} />
      </ConditionaldisplayComp>
      <EventComponet />
      <Reloader />
      <EvenClickComponent
        onEvenClicks={data => {
          console.log("even " + data);
        }}
      />
      <FormComponent />
      <IdentityFormComponent />
    </div>
  );
}

const props = { a: 4, b: 2 };
const elements = <PropPractice {...props} />;

// PropPractice.PropTypes = {
//   a: PropTypes.number.isRequired,
//   b: PropTypes.number.isRequired
// };
