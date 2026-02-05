it('applies correct CSS classes', () => {
  render(<Badge type="success" text="Active" />);
  
  const badge = screen.getByText('Active');
  
  expect(badge).toHaveClass('badge');
  expect(badge).toHaveClass('badge-success');
});