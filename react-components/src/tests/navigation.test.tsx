import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "../components/navigation/navigation";

describe("Navigation component", () => {
  it("Renders navigation", () => {
    render(<Navigation />, { wrapper: BrowserRouter });

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText("Main")).toBeInTheDocument();
    expect(screen.getByText("About Us")).toBeInTheDocument();
  });
});
