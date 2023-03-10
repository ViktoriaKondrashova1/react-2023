import { render, screen } from "@testing-library/react";
import About from "../pages/about/about";

describe("About", () => {
  it("Renders the about-us page", () => {
    render(<About />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "About Us"
    );
  });
});
