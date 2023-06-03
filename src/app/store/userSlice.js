import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    score: 0,
  },
  reducers: {
    updateScore: (state, action) => {
      if (action.payload === "resetScore") {
        state.score = 0;
      } else {
        state.score = state.score + 1;
      }
    },
  },
  extraReducers: {},
});

export const { updateScore } = slice.actions;
export default slice.reducer;
