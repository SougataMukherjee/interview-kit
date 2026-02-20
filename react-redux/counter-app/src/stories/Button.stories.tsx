import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from '../../src/ui/components/button'
import { ButtonVariant } from '../../src/ui/components/button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: 'select',
      options: Object.values(ButtonVariant),
    },
    borderRadius: {
      control: 'number',
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: ButtonVariant.PRIMARY,
  },
}

export const Outlined: Story = {
  args: {
    children: 'Outlined Button',
    variant: ButtonVariant.OUTLINED,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
}
