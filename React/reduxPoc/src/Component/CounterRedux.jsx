import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import counterSlice from '../redux/counterSlice';
const actions = counterSlice.actions;
function CounterRedux() {
    const {count} = useSelector((store) => {
        return store.counterState
    });

    //is used to call any method from reducer
    const dispatch = useDispatch();

    const handleIncrement = () => {
        console.log("increment will happen");
        dispatch(actions.increment());
        
      };
    
      const handleDecrement = () => {
        console.log("decrement will happen");
        dispatch(actions.decrement());
      };

  return (
    <div>
      <button onClick={handleIncrement}> + </button>
      <h3>{count}</h3>
      <button onClick={handleDecrement}> - </button>
    </div>
  )
}

export default CounterRedux
