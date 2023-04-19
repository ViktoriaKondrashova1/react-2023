import { createSlice } from "@reduxjs/toolkit";

const formCardsSlice = createSlice({
  name: "formCards",
  initialState: {
    cards: [],
  },
  reducers: {
    updateCards(state, action) {
      state.cards = action.payload;
    },
  },
});

export const { updateCards } = formCardsSlice.actions;
export default formCardsSlice.reducer;
