import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Form from "../containers/form/form";

describe("Form container", () => {
  it("Renders form", () => {
    const mockUserCardList = [
      {
        name: "Ivan",
        lastName: "Ivanov",
        birthDate: "21-07-1995",
        country: "Belarus",
        gender: "Other",
        image: "",
      },
    ];
    const clickFn = vi.fn();
    render(<Form userCardList={mockUserCardList} handleSubmit={clickFn} />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getAllByRole("textbox")).toBeTruthy();
    expect(screen.getAllByRole("radio")).toBeTruthy();
    expect(screen.getAllByRole("option")).toBeTruthy();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
