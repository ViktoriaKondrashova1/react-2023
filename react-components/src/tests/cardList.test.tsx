import { render, screen } from "@testing-library/react";
import CardList from "../containers/cardList/cardList";
import { mockCard } from "../mock/handlers";
import { Provider } from "react-redux";
import store from "../store/store";

describe("CardList component", async () => {
  it("Renders list of cards", () => {
    render(
      <Provider store={store}>
        <CardList data={[mockCard]} />
      </Provider>
    );
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
  });
});
