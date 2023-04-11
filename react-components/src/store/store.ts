import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import mainCardsReducer from "./mainCardsSlice";
import formCardsReducer from "./formCardsSlice";

export default configureStore({
  reducer: {
    searchValue: searchReducer,
    mainCardsList: mainCardsReducer,
    formCardsList: formCardsReducer,
  },
});
