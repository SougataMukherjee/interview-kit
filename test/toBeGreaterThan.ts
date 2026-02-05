it('validates score range', () => {
  const score = calculateScore(85);
  
  expect(score).toBeGreaterThan(50);
  expect(score).toBeGreaterThanOrEqual(85);
  expect(score).toBeLessThan(100);
});