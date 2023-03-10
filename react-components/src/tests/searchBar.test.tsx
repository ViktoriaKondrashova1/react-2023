import { render, screen } from "@testing-library/react";
import SearchBar from "../components/searchBar/searchBar";

describe("SearchBar component", () => {
  it("Renders search bar", () => {
    render(<SearchBar value="" />);

    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(screen.getByRole("searchbox")).toHaveAttribute("type", "search");
  });
});
