import React from 'react'
import Drawer from '@mui/material/Drawer'
import BasicTabs from '../../ui/components/tabs'

export interface SidebarProps {
  open: boolean
  anchor?: 'left' | 'right' | 'top' | 'bottom'
  onClose: () => void
}

const Sidebar: React.FC<SidebarProps> = ({
  open,
  anchor = 'left',
  onClose,
}) => {
  return (
    <Drawer
      open={open}
      anchor={anchor}
      onClose={onClose}
    >
      <BasicTabs/>
    </Drawer>
  )
}

export default Sidebar