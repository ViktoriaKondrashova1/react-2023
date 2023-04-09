import { render, screen } from "@testing-library/react";
import CardList from "../containers/cardList/cardList";
import { mockCard } from "../mock/handlers";

describe("CardList component", async () => {
  it("Renders list of cards", () => {
    render(<CardList data={[mockCard]} />);
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
  });
});
