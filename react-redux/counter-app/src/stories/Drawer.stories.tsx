import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

const meta: Meta<typeof Drawer> = {
  title: 'UI/Drawer',
  component: Drawer,
  argTypes: {
    anchor: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Drawer>
const DrawerContent = ({ anchor }: { anchor: Anchor }) => (
  <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    role="presentation"
  >
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
)

export const Default: Story = {
  args: {
    anchor: 'left',
  },
  render: (args) => {
    const [open, setOpen] = React.useState(false)

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Drawer
        </Button>

        <Drawer
          {...args}
          open={open}
          onClose={() => setOpen(false)}
        >
          <DrawerContent anchor={args.anchor as Anchor} />
        </Drawer>
      </>
    )
  },
}
export const Left: Story = {
  args: { anchor: 'left' },
  render: Default.render,
}
export const Right: Story = {
  args: { anchor: 'right' },
  render: Default.render,
}