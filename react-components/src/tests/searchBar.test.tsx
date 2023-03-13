import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import SearchBar from "../components/searchBar/searchBar";

const handleChange = vi.fn();

describe("SearchBar component", () => {
  it("Renders search bar", () => {
    render(<SearchBar value="" />);

    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(screen.getByRole("searchbox")).toHaveAttribute("type", "search");
  });

  it("onChange works"),
    () => {
      render(<SearchBar value="" handleChange={handleChange} />);

      fireEvent.change(screen.getByRole("textbox"), "test");

      expect(handleChange).toHaveBeenCalled();
      expect(handleChange).toHaveBeenCalledTimes(4);
    };
});
