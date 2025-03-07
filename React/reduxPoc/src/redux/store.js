import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import TodoSlice from "./TodoSlice";
import userSlice from "./UserSlice";

const store = configureStore({
    reducer: {
        counterState: counterSlice.reducer,
        todoState: TodoSlice.reducer,
        userState: userSlice.reducer
    }
})

export default store