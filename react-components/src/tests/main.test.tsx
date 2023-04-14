import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Main from "../pages/main/main";
import { Provider } from "react-redux";
import store from "../store/store";

describe("Main component", () => {
  it("Renders Main", async () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    expect(screen.getByText("Progressing...")).toBeInTheDocument();
    const search = (await screen.findByTestId(
      "search-input"
    )) as HTMLInputElement;
    await userEvent.type(search, "rick");
    await userEvent.keyboard("{enter}");
    expect(search.value).toBe("rick");
  });
});
