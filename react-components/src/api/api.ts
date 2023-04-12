import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MyApi } from "../types";

export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api/" }),
  endpoints: (build) => ({
    getCharacters: build.query<MyApi, void>({
      query: () => "character",
    }),
  }),
});

export const { useGetCharactersQuery } = rickAndMortyApi;
