import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserMiddleware } from '../middleware/userMiddleware';
import userSlice from '../redux/UserSlice';
const actions = userSlice.actions;
function UserRedux() {
    const dispatch = useDispatch();
    const {user, loading, error, param} = useSelector((store) => store.userState);
    const [value, setValue] = useState();

    useEffect(() => {
        if(param){
            dispatch(fetchUserMiddleware(param));
        }
    },[param])

    const sendParam = () => {
        dispatch(actions.getParam(value));
    }

    const heading = <>
    <h2>User Example</h2>
    <input 
    type="number" 
    value={value} 
    onChange={(e) => setValue(e.target.value)}
    />
    <button onClick={sendParam}>get user</button>
    </>
    if(loading){
        return <>{heading}
        <h3>...Loading</h3>
        </>
    }

    if(error){
        return <>{heading}
        <h3>Error occured</h3>
        </>
    }
  return (
    <>
      {heading}
      <h4>Name: {user.name}</h4>
      <h4>Phone: {user.phone}</h4>
    </>
  )
}

export default UserRedux
