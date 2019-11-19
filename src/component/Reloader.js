import React, { Component } from "react";

class Reloader extends Component {
  constructor() {
    super();
    this.state = {
      content: ""
    };
    this.onChar = this.onChar.bind(this);
    this.onGoTime = this.onGoTime.bind(this);
  }
  onChar(event) {
    this.setState({ content: event.target.value });
  }
  onGoTime(event) {
    if (this.state.content != "reload") {
      event.preventDefault();
    }
  }
  render() {
    return (
      <div>
        <h1>Class reloder component</h1>
        <form onSubmit={this.onGoTime}>
          <input
            type="text"
            value={this.state.content}
            onChange={this.onChar}
          />
          <input type="submit" value="Go Time" />
        </form>
      </div>
    );
  }
}

export default Reloader;
