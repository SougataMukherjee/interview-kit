import { render, screen } from "@testing-library/react";
import App, { sum } from "./App";

describe("Unit tests", () => {

  test("sum adds two numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("App component renders", () => {
    render(<App />);
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
  });

});
