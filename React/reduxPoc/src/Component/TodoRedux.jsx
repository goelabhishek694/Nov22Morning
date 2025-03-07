import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TodoSlice from '../redux/TodoSlice';
const actions = TodoSlice.actions;
function TodoRedux() {
    const dispatch = useDispatch();
    const {value, todoList} = useSelector((store) => {
        return store.todoState;
    })

    const handleInput = (e) => {
        const updatedValue = e.target.value;
        dispatch(actions.setValue(updatedValue));
    }

    const handleSubmit = (e) => {
        //add the recerntly typed value in input box in my todo list array 
        dispatch(actions.addTask(value));
    }
  return (
    <>
      <h2>Todo</h2>
      <div>
        <div className="inputBox">
            <input
            type='text'
            placeholder='Enter Your Tasks'
            value={value}
            onChange={handleInput}
            />
            <button onClick={handleSubmit}>Add</button>
        </div>
        <div className="list">
            <ul>
                {
                    todoList.map((task, idx) => <li key={idx}>{task}</li>)
                }
            </ul>
        </div>
      </div>
    </>
  )
}

export default TodoRedux
