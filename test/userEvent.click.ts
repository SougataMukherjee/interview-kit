// Simulates real user actions.userEvent is async → always await
// Counter.test.tsx
it('increments counter on click', async () => {
  const user = userEvent.setup();
  render(<Counter />);
  
  const incrementBtn = screen.getByRole('button', { name: /increment/i });
  
  await user.click(incrementBtn);
  await user.click(incrementBtn);
  
  expect(screen.getByText(/count: 2/i)).toBeInTheDocument();
});