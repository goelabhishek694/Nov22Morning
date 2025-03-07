import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userslice",
    initialState: {
        user: null,
        error: false,
        loading: true,
        param: null
    },
    reducers: {
        userLoading : (state) => { 
            state.error = false;
            state.loading = true;
        },
        userError : (state) => {
            state.error = true;
            state.loading = false;
        },
        userData : (state, data) => {
            state.loading = false;
            state.user =  data.payload;
        },
        getParam : (state, data) => {
            state.param = data.payload;
        } 
    }
})

export default userSlice