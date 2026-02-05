// beforeEach / afterEach
// Usually used for:
// Reset mocks
// Cleanup data

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
describe('UserList Component', () => {
  beforeEach(() => {
    console.log("Runs before each test");
    localStorage.clear();
  });

  afterEach(() => {
    console.log("Runs after each test - cleanup");
    jest.clearAllMocks();
  });

  it('test case 1', () => {
    // Test code
  });
});
