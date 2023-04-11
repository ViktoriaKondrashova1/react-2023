import { createSlice } from "@reduxjs/toolkit";

const mainCardsSlice = createSlice({
  name: "mainCards",
  initialState: {
    cards: null,
  },
  reducers: {
    updateCards(state, action) {
      state.cards = action.payload;
    },
  },
});

export const { updateCards } = mainCardsSlice.actions;
export default mainCardsSlice.reducer;
