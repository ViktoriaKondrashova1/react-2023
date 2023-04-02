import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../containers/header/header";

describe("Header component", () => {
  it("Renders Header of about page", () => {
    render(<Header />, { wrapper: BrowserRouter });

    const aboutLink = screen.getByText("About Us");

    fireEvent.click(aboutLink);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "About Us Page"
    );
  });

  it("Renders Header of main page", () => {
    render(<Header />, { wrapper: BrowserRouter });

    const mainLink = screen.getByText("Main");

    fireEvent.click(mainLink);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Main Page"
    );
  });

  it("Renders Header of form page", () => {
    render(<Header />, { wrapper: BrowserRouter });

    const formLink = screen.getByText("Form");

    fireEvent.click(formLink);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Form Page"
    );
  });
});
