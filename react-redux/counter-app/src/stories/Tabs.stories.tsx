import type { Meta, StoryObj } from '@storybook/react-vite'
import BasicTabs from '../ui/components/tabs'

const meta: Meta<typeof BasicTabs> = {
  title: 'UI/Tabs',
  component: BasicTabs,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof BasicTabs>
export const Default: Story = {
  render: () => <BasicTabs />,
}
export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '100%' }}>
      <BasicTabs />
    </div>
  ),
}