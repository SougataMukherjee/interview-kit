it('calculates sum correctly', () => {
  const result = add(2, 3);
  
  expect(result).toBe(5);
  expect(result).not.toBe(6);
});