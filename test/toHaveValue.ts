it('updates input value on type', async () => {
  const user = userEvent.setup();
  render(<Input placeholder="Enter name" />);
  
  const input = screen.getByRole('textbox');
  
  await user.type(input, 'John Doe');
  
  expect(input).toHaveValue('John Doe');
});