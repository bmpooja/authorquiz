import React, { Component } from "react";
import PropPractice from './PropPractice'

class EvenClickComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
    this.clickHandler= this.clickHandler.bind(this)
  }
   clickHandler(event){
      const newClicks = this.state.clicks +1
      this.setState({clicks:newClicks})
      if(newClicks % 2 ==0){
        this.props.onEvenClicks(newClicks)}
  }

  render(){
    return(
      <div>
        <h2>Even Click Component</h2>
        <p onClick={this.clickHandler}>This will count only Even Clicks {this.state.clicks}</p>
      </div>
    )
  }
}

export default EvenClickComponent
