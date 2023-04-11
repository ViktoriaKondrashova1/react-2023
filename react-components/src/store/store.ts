import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import mainCardsReducer from "./mainCardsSlice";

export default configureStore({
  reducer: {
    searchValue: searchReducer,
    cardsList: mainCardsReducer,
  },
});
