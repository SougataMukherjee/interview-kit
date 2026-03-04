import type { Meta, StoryObj } from '@storybook/react-vite'
import WorkInProgress from './WorkInProgress'
import mockItems from '../sample-data/mock-data.json';

const meta: Meta<typeof WorkInProgress> = {
  title: 'Pages/WorkInProgress',
  component: WorkInProgress,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof WorkInProgress>

export const Default: Story = {
  args: {
    items: mockItems.items,
  },
}