it('returns null when no results', () => {
  const result = searchUser('nonexistent');
  
  expect(result).toBeNull();
  expect(result).not.toBeDefined();
});