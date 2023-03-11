import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Page404 from "../pages/404/404";

describe("404 page", () => {
  it("Renders the 404 page", () => {
    render(<Page404 />, { wrapper: BrowserRouter });

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("404");
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "The page was not found"
    );
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button")).toHaveTextContent("Go to the main page");
  });
});
