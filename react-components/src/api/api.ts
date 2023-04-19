import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MyApi, CharacterProps } from "../types";

export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api/" }),
  endpoints: (build) => ({
    getCharacters: build.query<MyApi, string>({
      query: (name) => (name ? `character/?name=${name}` : "character"),
    }),
    getCharacterById: build.query<CharacterProps, number>({
      query: (id) => `character/${id}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } =
  rickAndMortyApi;
