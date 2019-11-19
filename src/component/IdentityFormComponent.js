import React,{Component} from 'react'

class IdentityFormComponent extends Component {
  constructor(){
    super()
    this.state ={
      firstName:"",
      lastName : ""
    }
    this.onFieldChange = this.onFieldChange.bind(this)
  }
  onFieldChange (event) {
   this.setState({
     [event.target.name] : event.target.value
    })  
  }
  render(){
    return(
      <form>
        <input type="text" name="firstName" value={this.state.name} 
        placeholder="First Name" onChange={this.onFieldChange} />
        <input type="text" name="lastName" value={this.state.lastName}
         placeholder="Last Name" onChange ={this.onFieldChange}/>  
         <p>{this.state.firstName}  {this.state.lastName}</p> 
      </form>
    )
  }
}

export default IdentityFormComponent