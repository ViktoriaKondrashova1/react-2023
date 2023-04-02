import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import Form from "../containers/form/form";
import userEvent from "@testing-library/user-event";

const mockSubmittion = vi.fn((userCardData) => {
  return Promise.resolve({ userCardData });
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

  it("Should not display errors when values are valid", async () => {
    const testImage = new File(["test"], "test.jpg", { type: "image/jpg" });

    render(<Form userCardList={mockValidData} updateCards={mockSubmittion} />);

    await waitFor(() => {
      fireEvent.change(screen.getByTestId("file"), {
        target: { files: [testImage] },
      });
    });
    // expect(fileInput.files).toHaveLength(1);

    await waitFor(() =>
      fireEvent.input(screen.getByTestId("firstName"), {
        target: {
          value: "Ivan",
        },
      })
    );

    await waitFor(() =>
      fireEvent.input(screen.getByTestId("lastName"), {
        target: {
          value: "Ivanov",
        },
      })
    );

    await waitFor(() =>
      fireEvent.input(screen.getByTestId("date"), {
        target: {
          value: "2023-04-01",
        },
      })
    );

    await waitFor(() =>
      fireEvent.change(screen.getByTestId("country"), {
        target: {
          value: "Belarus",
        },
      })
    );

    const genderOption: HTMLInputElement = screen.getByTestId("Other");
    await waitFor(() => fireEvent.click(genderOption));
    expect(genderOption.checked).toEqual(true);

    const checkbox: HTMLInputElement = screen.getByTestId("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);

    await waitFor(() => fireEvent.submit(screen.getByText("Submit")));
    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
    // expect(mockSubmittion).toBeCalledWith(mockValidData);
    // expect(
    //   screen.getByText("The form has been submitted!")
    // ).toBeInTheDocument();
    expect(mockSubmittion).toBeCalled();
  });
});
