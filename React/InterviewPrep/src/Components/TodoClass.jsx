import React, { Component } from 'react'

export default class TodoClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            newTodo: "",
            todoList: []
        };
        console.log("Constructor : setting up initial state and bindings");
    }

    componentDidMount(){
        console.log("CDM");
        //simulate fetching data from an API
        setTimeout(() => {
            this.setState({
                todoList: ["Learn React", "Attempt Assignment Questions"]
            })
        }, 2000)
    }

    shouldComponentUpdate(){
        console.log("Should compo update");
        // return false;
        return true;
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Component did update: checking if new to-do was added");
        if(prevState.todoList!==this.state.todoList){
            console.log("Updated To-dos: ", this.state.todoList);
        }
    }

    componentWillUnmount(){
        console.log("Component will unmount: cleaning up resources");
    }

    handleInputChange = (e) => {
        console.log("hello");
        
        this.setState({
            newTodo: e.target.value
        })
    }

    handleAddTodo = () => {
        this.setState({
            todoList: [...this.state.todoList, this.state.newTodo],
            newTodo:""
        })
    }
  render() {
    console.log("render method is called");
    
    return (
      <div>
        <h1>Todo List</h1>
        <input 
        type='text'
        value = {this.state.newTodo}
        placeholder='Enter your Tasks'
        onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddTodo}>Add</button>
        <ul>
            {this.state.todoList.map((todo, idx) => <li key={idx}>{todo}</li>)}
        </ul>
      </div>
    )
  }
}