import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: {}
    },
    reducers: {
        showLoading: (state) => {
            state.loading=true;
        },
        hideLoading: (state) => {
            state.loading=false;
        }
    }
})

export const {showLoading, hideLoading} = userSlice.actions;
export default userSlice.reducer;
