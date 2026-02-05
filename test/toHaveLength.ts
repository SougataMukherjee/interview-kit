it('renders correct number of items', () => {
  const items = ['Apple', 'Banana', 'Cherry'];
  render(<ItemList items={items} />);
  
  const listItems = screen.getAllByRole('listitem');
  
  expect(listItems).toHaveLength(3);
});