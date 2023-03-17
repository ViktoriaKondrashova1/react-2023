import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Main from "../pages/main/main";
import data from "../assets/data.json";

describe("Main component", () => {
  it("Renders Main", () => {
    render(<Main />, { wrapper: BrowserRouter });

    const cardsList = screen.getByTestId("cards-list");

    expect(cardsList).toBeInTheDocument();
    expect(cardsList).not.toBeEmptyDOMElement();
    expect(screen.getAllByTestId("card")).toHaveLength(data.length);
  });
});
