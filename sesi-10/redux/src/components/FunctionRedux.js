import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const FunctionRedux = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByTen: (state) => {
      state.count += 10;
    },
  },
});

export const { increment, decrement, incrementByTen } = FunctionRedux.actions;

export default FunctionRedux.reducer;
