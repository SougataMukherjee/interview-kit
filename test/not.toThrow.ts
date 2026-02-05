// Used for safety checks.
// ErrorBoundary.test.tsx
it('does not throw error with valid props', () => {
  expect(() => {
    render(<SafeComponent data="valid" />);
  }).not.toThrow();
});