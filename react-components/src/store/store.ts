import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import mainCardsReducer from "./mainCardsSlice";
import formCardsReducer from "./formCardsSlice";
import { rickAndMortyApi } from "../api/api";

const store = configureStore({
  reducer: {
    searchValue: searchReducer,
    mainCardsList: mainCardsReducer,
    formCardsList: formCardsReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
