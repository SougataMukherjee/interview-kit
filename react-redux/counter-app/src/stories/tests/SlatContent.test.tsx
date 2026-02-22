import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { composeStories } from '@storybook/react'
import * as stories from '../content/SlatContent.stories'

const { Default } = composeStories(stories)

describe('SlatContent Story', () => {
  it('renders slat rows', () => {
    render(<Default />)

    expect(screen.getByText('Order #123')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })

  it('toggles details on click', () => {
    render(<Default />)

    fireEvent.click(screen.getByText('Order #123'))

    expect(screen.getByText('Delivered')).toBeInTheDocument()
  })
})