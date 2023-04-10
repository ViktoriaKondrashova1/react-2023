import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Form from "../containers/form/form";

afterEach(() => {
  vi.resetAllMocks();
});

const mockValidData = [
  {
    name: "Ivan",
    lastName: "Ivanov",
    birthDate: "21-07-1995",
    country: "Belarus",
    gender: "Other",
    image: "",
  },
];

const mockInvalidData = [
  {
    name: "",
    lastName: "",
    birthDate: "",
    country: "",
    gender: "",
    image: "",
  },
];

describe("Form container", () => {
  window.URL.createObjectURL = vi.fn();
  const mockSubmittion = vi.fn();

  it("Renders form container", () => {
    render(<Form userCardList={mockValidData} updateCards={mockSubmittion} />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getAllByRole("textbox")).toBeTruthy();
    expect(screen.getAllByRole("radio")).toBeTruthy();
    expect(screen.getAllByRole("option")).toBeTruthy();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("Displays error when value is invalid", async () => {
    render(
      <Form userCardList={mockInvalidData} updateCards={mockSubmittion} />
    );
    fireEvent.submit(screen.getByText("Submit"));
    expect(await screen.findAllByRole("alert")).toHaveLength(7);
    expect(mockSubmittion).not.toBeCalled();
  });

  it("Displays minlength error when first name is invalid", async () => {
    render(
      <Form userCardList={mockInvalidData} updateCards={mockSubmittion} />
    );
    fireEvent.input(screen.getByTestId("firstName"), {
      target: {
        value: "iv",
      },
    });
    fireEvent.submit(screen.getByText("Submit"));
    expect(await screen.findAllByRole("alert")).toHaveLength(7);
    expect(mockSubmittion).not.toBeCalled();
    expect(screen.getByTestId("firstName")).toHaveValue("iv");
    expect(
      screen.getByText("Value should be at least 3 chars")
    ).toBeInTheDocument();
  });
});
