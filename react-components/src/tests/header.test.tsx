import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../containers/header/header";

describe("Header component", () => {
  it("Renders Header", () => {
    render(<Header />, { wrapper: BrowserRouter });

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
