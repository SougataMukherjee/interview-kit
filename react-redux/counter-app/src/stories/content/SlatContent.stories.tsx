import type { Meta, StoryObj } from '@storybook/react-vite'
import SlatContent from './SlatContent'

const meta: Meta<typeof SlatContent> = {
  title: 'Components/SlatContent',
  component: SlatContent,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof SlatContent>
const mockData = [
  {
    id: 1,
    columns: ['Order #123', 'John Doe', '₹2,500'],
    details: (
      <div>
        <p><strong>Status:</strong> Delivered</p>
        <p><strong>Date:</strong> 12 Feb 2026</p>
        <p><strong>Address:</strong> Bangalore, India</p>
      </div>
    ),
  },
  {
    id: 2,
    columns: ['Order #124', 'Jane Smith', '₹1,200'],
    details: (
      <div>
        <p><strong>Status:</strong> In Progress</p>
        <p><strong>Date:</strong> 15 Feb 2026</p>
        <p><strong>Address:</strong> Mumbai, India</p>
      </div>
    ),
  },
  {
    id: 3,
    columns: ['Order #125', 'Rahul Kumar', '₹4,100'],
    details: (
      <div>
        <p><strong>Status:</strong> Cancelled</p>
        <p><strong>Date:</strong> 18 Feb 2026</p>
        <p><strong>Reason:</strong> Payment Failed</p>
      </div>
    ),
  },
]
export const Default: Story = {
  args: {
    data: mockData,
  },
}

