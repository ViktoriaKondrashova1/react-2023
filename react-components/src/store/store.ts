import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import mainCardsReducer from "./mainCardsSlice";
import formCardsReducer from "./formCardsSlice";
import { rickAndMortyApi } from "../api/api";

export default configureStore({
  reducer: {
    searchValue: searchReducer,
    mainCardsList: mainCardsReducer,
    formCardsList: formCardsReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});
