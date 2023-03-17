import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/searchBar/searchBar";

describe("SearchBar component", () => {
  it("Renders search bar", async () => {
    render(<SearchBar />);

    const searchInput = screen.getByPlaceholderText(
      "Search..."
    ) as HTMLInputElement;

    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute("type", "search");

    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });
});
