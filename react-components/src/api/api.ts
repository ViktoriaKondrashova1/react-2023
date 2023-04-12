import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MyApi, CharacterProps } from "../types";

export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api/" }),
  endpoints: (build) => ({
    getCharacters: build.query<MyApi, void>({
      query: () => "character",
    }),
    searchByName: build.query<MyApi, string>({
      query: (name) => `character/${name && `?name=${name}`}`,
    }),
    getCharacterById: build.query<CharacterProps | null, number | undefined>({
      query: (id) => `character/${id && `${id}`}`,
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useSearchByNameQuery,
  useGetCharacterByIdQuery,
} = rickAndMortyApi;
