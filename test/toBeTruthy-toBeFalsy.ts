it('validates email format', () => {
  const validEmail = isValidEmail('test@example.com');
  const invalidEmail = isValidEmail('invalid');
  
  expect(validEmail).toBeTruthy();
  expect(invalidEmail).toBeFalsy();
});