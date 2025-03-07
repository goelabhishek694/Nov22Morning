import userSlice from "../redux/UserSlice";
const actions = userSlice.actions;
export const fetchUserMiddleware = (param) => {
    return async (dispatch) => {
        try{
            dispatch(actions.userLoading());
            const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${param}`);
            const user = await resp.json();
            dispatch(actions.userData(user));
        }catch(err){
            dispatch(actions.userError());
        }
    }
}

