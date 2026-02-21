import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import Switch from '@mui/material/Switch'
import Stack from '@mui/material/Stack'

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'warning', 'default'],
    },
    onChange: { action: 'changed' },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

const label = { inputProps: { 'aria-label': 'Switch demo' } }

export const Default: Story = {
  args: {
    ...label,
  },
}
export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(true)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked)
    }

    return (
      <Switch
        {...label}
        checked={checked}
        onChange={handleChange}
      />
    )
  },
}
export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Switch {...label} defaultChecked />
      <Switch {...label} defaultChecked color="secondary" />
      <Switch {...label} defaultChecked color="warning" />
      <Switch {...label} defaultChecked color="default" />
    </Stack>
  ),
}
export const Disabled: Story = {
  args: {
    ...label,
    disabled: true,
  },
}