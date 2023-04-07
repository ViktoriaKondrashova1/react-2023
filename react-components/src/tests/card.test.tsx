import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import Card from "../components/card/card";

const mockCardClick = vi.fn();

describe("Card component", () => {
  it("Renders card", () => {
    render(
      <Card
        name={"Rick Sanchez"}
        image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}
        status={"Alive"}
        handleClick={mockCardClick}
      />,
      {
        wrapper: BrowserRouter,
      }
    );
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "Rick Sanchez"
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText(/Status/i)).toHaveTextContent("Status: Alive");
  });
});
