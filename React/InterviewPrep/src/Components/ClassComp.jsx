import React, { Component } from 'react'

export default class ClassComp extends Component {
    //the props parameter allows the component to access properties passed from its parent component
    constructor(props){
        //calls the constructor of parent class. emables component to use this to refer itself
        super(props);
        this.state = {
            count : 0,
            message: "Hello"
        }
        // this.handleCount = this.handleCount.bind(this);
    }

  //   handleCount(){
  //     this.setState({count: this.state.count+1});
  // }
  
    handleCount = ()=>{
        this.setState({count: this.state.count+1});
    }
  render() {
    return (
      <div>
        <h1>Hello World, {this.props.name}</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleCount}>Increment</button>
      </div>
    )
  }
}
