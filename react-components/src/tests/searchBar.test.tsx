import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/searchBar/searchBar";
import { vi } from "vitest";
import { Provider } from "react-redux";
import store from "../store/store";

const mockOnKeyDown = vi.fn();

describe("SearchBar component", () => {
  it("Renders search bar", async () => {
    render(
      <Provider store={store}>
        <SearchBar handleKeyDown={mockOnKeyDown} />
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText(
      "Search..."
    ) as HTMLInputElement;

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute("type", "search");

    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");

    fireEvent.keyDown(searchInput, { key: "Enter" });
    expect(mockOnKeyDown).toBeCalled();
    expect(mockOnKeyDown.mock.calls.length).toBe(1);
  });
});
