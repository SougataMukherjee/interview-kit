// Prints DOM to terminal (great for debugging).
// Use when element is not found.
it('debugs the component output', () => {
  render(<Card title="Test" />);
  
  // Prints entire DOM
  screen.debug();
  
  // Prints specific element
  screen.debug(screen.getByRole('heading'));
});