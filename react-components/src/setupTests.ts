import matchers from "@testing-library/jest-dom/matchers";
// import server from "./mock/testServer";
import { expect } from "vitest";
import "whatwg-fetch";

// beforeAll(() => server.listen());
// afterAll(() => server.close());
// afterEach(() => server.resetHandlers());

expect.extend(matchers);
