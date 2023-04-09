import { rest } from "msw";

const url = "https://rickandmortyapi.com/api/character";
const urlId = "https://rickandmortyapi.com/api/character/1";

export const mockCard = {
  id: 1,
  name: "Rick Sanchez",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "",
  },
  location: {
    name: "Citadel of Ricks",
    url: "",
  },
  created: "2017-11-04T18:48:46.250Z",
  episode: [],
  url: "",
};

export const handlers = [
  rest.get(url, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([mockCard]));
  }),
  rest.get(url, (req, res, ctx) => {
    const search = req.url.searchParams.get("rick");
    if (!search) {
      return res(ctx.status(200), ctx.json([mockCard]));
    }
  }),
  rest.get(urlId, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockCard));
  }),
  rest.get(url, (req, res, ctx) => {
    return res(ctx.status(404));
  }),
];
