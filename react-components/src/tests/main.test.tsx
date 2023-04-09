import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Main from "../pages/main/main";

describe("Main component", () => {
  it("Renders Main", async () => {
    render(<Main />);
    expect(screen.getByText("Progressing...")).toBeInTheDocument();
    const search = (await screen.findByTestId(
      "search-input"
    )) as HTMLInputElement;
    await userEvent.type(search, "rick");
    await userEvent.keyboard("{enter}");
    expect(search.value).toBe("rick");
  });
});
