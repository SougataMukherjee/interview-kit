// Best practice → accessibility based queries.

it('finds elements by role', () => {
  render(<Navigation />);
  
  const heading = screen.getByRole('heading', { name: /welcome/i });
  const button = screen.getByRole('button');
  const textbox = screen.getByRole('textbox', { name: /username/i });
  
  expect(heading).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});