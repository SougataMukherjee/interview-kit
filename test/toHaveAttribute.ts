it('has correct attributes', () => {
  render(<Link href="https://example.com" target="_blank" />);
  
  const link = screen.getByRole('link');
  
  expect(link).toHaveAttribute('href', 'https://example.com');
  expect(link).toHaveAttribute('target', '_blank');
  expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "Enter name");

});