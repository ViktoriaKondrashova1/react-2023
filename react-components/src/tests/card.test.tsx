import { render, screen } from "@testing-library/react";
import Card from "../components/card/card";
import data from "../assets/data.json";
import { BrowserRouter } from "react-router-dom";

describe("Card component", () => {
  it("Renders card", () => {
    render(
      <Card
        title={data[0].title}
        key={data[0].id}
        image={data[0].image}
        link={data[0].link}
        author={data[0].author}
        raiting={data[0].rating}
        time={data[0].time}
        veg={data[0].veg}
      />,
      { wrapper: BrowserRouter }
    );
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      data[0].title
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("link")).not.toBeDisabled();
    expect(screen.getByText(/by/i)).toHaveTextContent(`by ${data[0].author}`);
    expect(screen.getByText(/raiting:/i)).toHaveTextContent(
      `raiting: ${data[0].rating}`
    );
    expect(screen.getByText(/min/i)).toHaveTextContent(`${data[0].time} min`);
  });
});
