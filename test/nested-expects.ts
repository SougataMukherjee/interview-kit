describe("Counter Component", () => {
  test("renders initial value", () => {
    render(<Counter />);

    const countText = screen.getByText("Count: 0");
    expect(countText).toBeInTheDocument();
    expect(countText).toHaveTextContent("0");
  });
});