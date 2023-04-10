import { setupServer } from "msw/node";
import { handlers } from "./handlers";
import "whatwg-fetch";

const server = setupServer(...handlers);

export default server;
