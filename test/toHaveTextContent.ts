it('displays correct text content', () => {
  render(<Greeting name="John" />);
  
  const element = screen.getByRole('heading');
  
  expect(element).toHaveTextContent('Hello, John');
  expect(element).toHaveTextContent(/hello/i);
});