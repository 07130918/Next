import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        add(state, { payload }) {
            // toolkitではミュータブルな操作がイミュータブルな操作として扱われる
            // その場合returnは書かない
            state.count = state.count + payload;
            // const newState = { ...state };
            // newState.count = state.count + payload
            // return newState;
        },
        minus(state, { payload }) {
            state.count = state.count - payload;
            // const newState = { ...state };
            // newState.count = state.count - payload
            // return newState;
        }
    }
})

const { add, minus } = counter.actions;

export { add, minus };
export default counter.reducer
