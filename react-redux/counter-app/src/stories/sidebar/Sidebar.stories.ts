import type { Meta, StoryObj } from '@storybook/react-vite'
import Sidebar from './Sidebar'

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    open: {
      control: 'boolean',
    },
    anchor: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
    onClose: {
      action: 'closed',
    },
  },
}

export default meta
type Story = StoryObj<typeof Sidebar>
export const LeftTabs: Story = {
  args: {
    open: true,
    anchor: 'left',
  },
}
export const RightTabs: Story = {
  args: {
    open: true,
    anchor: 'right',
  },
}