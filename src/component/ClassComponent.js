import React, { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    };
  }

  render() {
    return (
      <div>
        <h1
          onClick={() => {
            this.setState({counter:this.state.counter + 1
            })}}
        >
          {" "}
          Counter : {this.state.counter}
        </h1>
        <p>counter has been clicked {this.state.counter}times</p>
      </div>
    );
  }
}

export default ClassComponent;
