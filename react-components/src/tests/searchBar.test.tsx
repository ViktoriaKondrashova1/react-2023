import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import SearchBar from "../components/searchBar/searchBar";

const handleChange = vi.fn();
// const handleChange = vi.spyOn(SearchBar.prototype, "handleChange");

describe("SearchBar component", () => {
  it("Renders search bar", () => {
    render(<SearchBar />);

    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(screen.getByRole("searchbox")).toHaveAttribute("type", "search");
  });

  it("onChange works"),
    () => {
      render(<SearchBar />);

      const searchInput = screen.getByRole("textbox") as HTMLInputElement;
      fireEvent.change(searchInput, "test");

      expect(searchInput.value).toBe("test");
      expect(handleChange).toHaveBeenCalled();
      expect(handleChange).toHaveBeenCalledTimes(4);
    };
});
