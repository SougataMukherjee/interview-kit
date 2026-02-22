// src/stories/headers/tests/Header.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { composeStories } from '@storybook/react'

import * as stories from '../headers/Header.stories'

const { WithSearch, WithOutSearch } = composeStories(stories)

describe('Header (storybook)', () => {
  it('renders header with logged-in user (WithSearch)', () => {
    render(<WithSearch />)

    // user name should appear
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()

    // logout button should be visible
    expect(
      screen.getByRole('button', { name: /log out/i })
    ).toBeInTheDocument()
  })

  it('renders header without user (WithOutSearch)', () => {
    render(<WithOutSearch />)

    // login & signup buttons should appear
    expect(
      screen.getByRole('button', { name: /log in/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /sign up/i })
    ).toBeInTheDocument()
  })
})