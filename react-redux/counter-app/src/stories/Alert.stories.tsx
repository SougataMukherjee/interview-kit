import type { Meta, StoryObj } from '@storybook/react-vite'
import {Alert} from '../ui/components/alert'
import  {AlertVariant}  from '../ui/components/alert'

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(AlertVariant),
    },
    showIcon: {
      control: 'boolean',
    },
    elevation: {
      control: 'number',
    },
    fullWidth: {
      control: 'boolean',
    },
    onClose: {
      action: 'closed',
    },
  },
}

export default meta

type Story = StoryObj<typeof Alert>
export const Info: Story = {
  args: {
    message: 'This is an info alert',
    variant: AlertVariant.INFO,
  },
}
export const Success: Story = {
  args: {
    message: 'Operation completed successfully',
    variant: AlertVariant.SUCCESS,
  },
}
export const Warning: Story = {
  args: {
    message: 'Please double-check your input',
    variant: AlertVariant.WARNING,
  },
}
export const Error: Story = {
  args: {
    message: 'Something went wrong',
    variant: AlertVariant.ERROR,
  },
}
export const Closable: Story = {
  args: {
    message: 'You can close this alert',
    onClose: () => {},
  },
}
export const FullWidth: Story = {
  args: {
    message: 'Full width alert',
    fullWidth: true,
  },
}