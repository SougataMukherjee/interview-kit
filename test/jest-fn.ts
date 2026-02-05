// its a mock function
it('calls onSubmit when button is clicked', async () => {
  const mockSubmit = jest.fn();
  const user = userEvent.setup();
  
  render(<LoginForm onSubmit={mockSubmit} />);
  
  const button = screen.getByRole('button', { name: /submit/i });
  await user.click(button);
  expect(onClickMock).toHaveBeenCalled();
  expect(mockSubmit).toHaveBeenCalledTimes(1);
});