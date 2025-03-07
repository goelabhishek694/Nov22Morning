import {createSlice} from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: "todoslice",
    initialState : {
        value: "",
        todoList: ["Attempt assignment ques"]
    },
    reducers: {
        setValue : (state, data) => {
            state.value = data.payload;
        },
        addTask : (state, data) => {
            state.todoList = [...state.todoList, data.payload];
            state.value = "";
        }
    }
})

export default TodoSlice