import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import Input from '../ui/components/input'
import { InputVariant } from '../ui/components/input'

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(InputVariant),
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    onChange: { action: 'changed' },
  },
}

export default meta
type Story = StoryObj<typeof Input>
const ControlledInput = (args: any) => {
  const [value, setValue] = useState(args.value || '')

  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
        args.onChange?.(e)
      }}
    />
  )
}
export const Default: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    variant: InputVariant.OUTLINED,
  },
}
export const Filled: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    label: 'Email',
    placeholder: 'Enter email',
    variant: InputVariant.FILLED,
  },
}
export const Error: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    label: 'Username',
    error: true,
    helperText: 'Username is required',
  },
}