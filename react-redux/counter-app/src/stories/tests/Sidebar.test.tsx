// src/stories/sidebar/tests/Sidebar.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { composeStories } from '@storybook/react'

import * as stories from '../sidebar/Sidebar.stories'

const { LeftTabs, RightTabs } = composeStories(stories)

describe('Sidebar (storybook)', () => {
  it('renders left sidebar when open', () => {
    render(<LeftTabs />)

    // Drawer should be visible
    expect(
      screen.getByRole('presentation', { hidden: true })
    ).toBeInTheDocument()
  })

  it('renders right sidebar when open', () => {
    render(<RightTabs />)

    // Drawer should be visible
    expect(
      screen.getByRole('presentation', { hidden: true })
    ).toBeInTheDocument()
  })
})