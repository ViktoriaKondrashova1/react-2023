import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LinkButton from "../components/linkButton/linkButton";

describe("LinkButton component", () => {
  it("Renders linkButton without text", () => {
    render(<LinkButton link="/" />, { wrapper: BrowserRouter });

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("link")).toBeEnabled();
  });

  it("Renders linkButton with text", () => {
    render(
      <BrowserRouter>
        <LinkButton link="/" text="Click me" />
      </BrowserRouter>
    );

    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
