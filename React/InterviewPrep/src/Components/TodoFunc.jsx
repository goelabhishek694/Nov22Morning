import React, { useEffect, useState } from 'react'

function TodoFunc() {
    //this is goung to happen only once. 
    console.log("setting up initial state and bindings");
    const [newTodo,setNewTodo] = useState("");
    const [todoList,setTodoList] = useState([]);
    useEffect(() => {
        console.log("CDM");
        //simulate fetching data from an API
        setTimeout(() => {
            setTodoList(["Learn React", "Attempt Assignment Questions"])
        }, 2000)

        return () => {
            console.log("Component will unmount: cleaning up resources");
        }
    },[])

    useEffect(() => {
        console.log("Component did update: checking if new to-do was added");
        console.log("Updated To-dos: ", todoList);
    },[todoList])

    const handleInputChange = (e) => {
        setNewTodo(e.target.value)
    }

    const handleAddTodo = () => {
        setTodoList([...todoList, newTodo]);
        setNewTodo("");
    }
console.log("render is called");
  return (
    <div>
        <h1>Todo List</h1>
        <input 
        type='text'
        value = {newTodo}
        placeholder='Enter your Tasks'
        onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>Add</button>
        <ul>
            {todoList.map((todo, idx) => <li key={idx}>{todo}</li>)}
        </ul>
      </div>
  )
}

export default TodoFunc
