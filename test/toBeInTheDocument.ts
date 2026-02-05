it('shows and hides alert', () => {
  const { rerender } = render(<Alert show={true} message="Error!" />);
  
  expect(screen.getByText('Error!')).toBeInTheDocument();
  
  rerender(<Alert show={false} message="Error!" />);
  
  expect(screen.queryByText('Error!')).not.toBeInTheDocument();
});