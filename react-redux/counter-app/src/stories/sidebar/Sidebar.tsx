import React from 'react'
import { 
  Drawer, 
  Box, 
  Tabs, 
  Tab, 
  Typography, 
  Divider,
  List,
  ListItem,
  ListItemText
} from '@mui/material'
import type { DetailsData } from './interface'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`sidebar-tabpanel-${index}`}
      aria-labelledby={`sidebar-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `sidebar-tab-${index}`,
    'aria-controls': `sidebar-tabpanel-${index}`,
  }
}

export interface SidebarProps {
  open: boolean
  anchor?: 'left' | 'right' | 'top' | 'bottom'
  onClose: () => void
  detailsData?: DetailsData | null
}

const Sidebar: React.FC<SidebarProps> = ({
  open,
  anchor = 'right',
  onClose,
  detailsData,
}) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const calculateLabourTotal = (data: DetailsData) => {
    const labour = [
      parseFloat(data.body.replace('$', '')) || 0,
      parseFloat(data.paint.replace('$', '')) || 0,
      parseFloat(data.frame.replace('$', '')) || 0,
      parseFloat(data.mech.replace('$', '')) || 0,
      parseFloat(data.misc.replace('$', '')) || 0,
      parseFloat(data.labourOther.replace('$', '')) || 0,
      parseFloat(data.customLabour.replace('$', '')) || 0,
      parseFloat(data.detail.replace('$', '')) || 0,
    ]
    return labour.reduce((sum, val) => sum + val, 0)
  }

  const calculatePartsTotal = (data: DetailsData) => {
    const parts = [
      parseFloat(data.partsNew.replace('$', '')) || 0,
      parseFloat(data.partsAM.replace('$', '')) || 0,
      parseFloat(data.partsUsed.replace('$', '')) || 0,
      parseFloat(data.glass.replace('$', '')) || 0,
      parseFloat(data.partsOthers.replace('$', '')) || 0,
      parseFloat(data.customTax.replace('$', '')) || 0,
    ]
    return parts.reduce((sum, val) => sum + val, 0)
  }

  const calculateMiscTotal = (data: DetailsData) => {
    const misc = [
      parseFloat(data.sublet.replace('$', '')) || 0,
      parseFloat(data.payableTaxes.replace('$', '')) || 0,
    ]
    return misc.reduce((sum, val) => sum + val, 0)
  }

  const renderSummaryTab = () => {
    if (!detailsData) {
      return (
        <Typography variant="body2" color="text.secondary">
          No data selected
        </Typography>
      )
    }

    const labourTotal = calculateLabourTotal(detailsData)
    const partsTotal = calculatePartsTotal(detailsData)
    const miscTotal = calculateMiscTotal(detailsData)

    return (
      <Box>
        {/* Labour Costs Section */}
        <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
          Labour Costs
        </Typography>
        <List dense>
          <ListItem sx={{ py: 0.5 }}>
            <ListItemText 
              primary="Body:" 
              secondary={detailsData.body}
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'body2', sx: { textAlign: 'right' } }}
            />
          </ListItem>
          <ListItem sx={{ py: 0.5 }}>
            <ListItemText 
              primary="Paint:" 
              secondary={detailsData.paint}
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'body2', sx: { textAlign: 'right' } }}
            />
          </ListItem>
          <ListItem sx={{ py: 0.5 }}>
            <ListItemText 
              primary="Frame:" 
              secondary={detailsData.frame}
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'body2', sx: { textAlign: 'right' } }}
            />
          </ListItem>
          <ListItem sx={{ py: 0.5 }}>
            <ListItemText 
              primary="Mech:" 
              secondary={detailsData.mech}
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'body2', sx: { textAlign: 'right' } }}
            />
          </ListItem>
          <ListItem sx={{ py: 0.5 }}>
            <ListItemText 
              primary="Misc:" 
              secondary={detailsData.misc}
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'body2', sx: { textAlign: 'right' } }}
            />
          </ListItem>
          <ListItem sx={{ py: 0.5 }}>
            <ListItemText 
              primary="Other:" 
              secondary={detailsData.labourOther}
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'body2', sx: { textAlign: 'right' } }}
            />
          </ListItem>
          <ListItem sx={{ py: 0.5 }}>
            <ListItemText 
              primary="Customs:" 
              secondary={detailsData.customLabour}
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'body2', sx: { textAlign: 'right' } }}
            />
          </ListItem>
          <ListItem sx={{ py: 0.5 }}>
            <ListItemText 
              primary="Detail:" 
              secondary={detailsData.detail}
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'body2', sx: { textAlign: 'right' } }}
            />
          </ListItem>
        </List>
        <Divider sx={{ my: 1 }} />
        <ListItem sx={{ py: 0.5, backgroundColor: '#f5f5f5' }}>
          <ListItemText 
            primary="Total:" 
            secondary={`$${labourTotal.toFixed(2)}`}
            primaryTypographyProps={{ variant: 'body2', fontWeight: 'bold' }}
            secondaryTypographyProps={{ variant: 'body2', fontWeight: 'bold', sx: { textAlign: 'right' } }}
          />
        </ListItem>

        {/* Parts Costs Section */}
        <Typography variant="h6" sx={{ mt: 3, mb: 2, color: 'primary.main' }}>
          Parts Costs
        </Typography>
        <List dense>
          <ListItem sx={{ py: 0.5 }}>
            <ListItemText 
              primary="Parts New:" 
              secondary={detailsData.partsNew}
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'body2', sx: { textAlign: 'right' } }}
            />
          </ListItem>
          <ListItem sx={{ py: 0.5 }}>
            <ListItemText 
              primary="Parts AM:" 
              secondary={detailsData.partsAM}
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'body2', sx: { textAlign: 'right' } }}
            />
          </ListItem>
          <ListItem sx={{ py: 0.5 }}>
            <ListItemText 
              primary="Parts Used:" 
              secondary={detailsData.partsUsed}
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'body2', sx: { textAlign: 'right' } }}
            />
          </ListItem>
          <ListItem sx={{ py: 0.5 }}>
            <ListItemText 
              primary="Glass:" 
              secondary={detailsData.glass}
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'body2', sx: { textAlign: 'right' } }}
            />
          </ListItem>
          <ListItem sx={{ py: 0.5 }}>
            <ListItemText 
              primary="Parts Other:" 
              secondary={detailsData.partsOthers}
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'body2', sx: { textAlign: 'right' } }}
            />
          </ListItem>
          <ListItem sx={{ py: 0.5 }}>
            <ListItemText 
              primary="Paint:" 
              secondary={detailsData.paint}
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'body2', sx: { textAlign: 'right' } }}
            />
          </ListItem>
          <ListItem sx={{ py: 0.5 }}>
            <ListItemText 
              primary="Customs:" 
              secondary={detailsData.customTax}
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'body2', sx: { textAlign: 'right' } }}
            />
          </ListItem>
          <ListItem sx={{ py: 0.5 }}>
            <ListItemText 
              primary="Taxes:" 
              secondary={detailsData.payableTaxes}
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'body2', sx: { textAlign: 'right' } }}
            />
          </ListItem>
        </List>
        <Divider sx={{ my: 1 }} />
        <ListItem sx={{ py: 0.5, backgroundColor: '#f5f5f5' }}>
          <ListItemText 
            primary="Total:" 
            secondary={`$${partsTotal.toFixed(2)}`}
            primaryTypographyProps={{ variant: 'body2', fontWeight: 'bold' }}
            secondaryTypographyProps={{ variant: 'body2', fontWeight: 'bold', sx: { textAlign: 'right' } }}
          />
        </ListItem>

        {/* Misc Costs Section */}
        <Typography variant="h6" sx={{ mt: 3, mb: 2, color: 'primary.main' }}>
          Misc Costs
        </Typography>
        <List dense>
          <ListItem sx={{ py: 0.5 }}>
            <ListItemText 
              primary="Pre-Mat:" 
              secondary="$0.00"
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'body2', sx: { textAlign: 'right' } }}
            />
          </ListItem>
          <ListItem sx={{ py: 0.5 }}>
            <ListItemText 
              primary="Dry-Age:" 
              secondary="$0.00"
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'body2', sx: { textAlign: 'right' } }}
            />
          </ListItem>
          <ListItem sx={{ py: 0.5 }}>
            <ListItemText 
              primary="Misc:" 
              secondary="$0.00"
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'body2', sx: { textAlign: 'right' } }}
            />
          </ListItem>
          <ListItem sx={{ py: 0.5 }}>
            <ListItemText 
              primary="Tow:" 
              secondary={detailsData.sublet}
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'body2', sx: { textAlign: 'right' } }}
            />
          </ListItem>
          <ListItem sx={{ py: 0.5 }}>
            <ListItemText 
              primary="Tax:" 
              secondary={detailsData.payableTaxes}
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'body2', sx: { textAlign: 'right' } }}
            />
          </ListItem>
          <ListItem sx={{ py: 0.5 }}>
            <ListItemText 
              primary="Misc:" 
              secondary="$0.00"
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'body2', sx: { textAlign: 'right' } }}
            />
          </ListItem>
          <ListItem sx={{ py: 0.5 }}>
            <ListItemText 
              primary="Customs:" 
              secondary="$0.00"
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'body2', sx: { textAlign: 'right' } }}
            />
          </ListItem>
          <ListItem sx={{ py: 0.5 }}>
            <ListItemText 
              primary="Taxes:" 
              secondary="$0.00"
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'body2', sx: { textAlign: 'right' } }}
            />
          </ListItem>
        </List>
        <Divider sx={{ my: 1 }} />
        <ListItem sx={{ py: 0.5, backgroundColor: '#f5f5f5' }}>
          <ListItemText 
            primary="Total:" 
            secondary={`$${miscTotal.toFixed(2)}`}
            primaryTypographyProps={{ variant: 'body2', fontWeight: 'bold' }}
            secondaryTypographyProps={{ variant: 'body2', fontWeight: 'bold', sx: { textAlign: 'right' } }}
          />
        </ListItem>
      </Box>
    )
  }

  const renderTotalTab = () => {
    if (!detailsData) {
      return (
        <Typography variant="body2" color="text.secondary">
          No data selected
        </Typography>
      )
    }

    const labourTotal = calculateLabourTotal(detailsData)
    const partsTotal = calculatePartsTotal(detailsData)
    const miscTotal = calculateMiscTotal(detailsData)
    const grandTotal = labourTotal + partsTotal + miscTotal

    return (
      <Box>
        <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
          Total Summary
        </Typography>
        <List dense>
          <ListItem sx={{ py: 1 }}>
            <ListItemText 
              primary="Labour Total:" 
              secondary={`$${labourTotal.toFixed(2)}`}
              primaryTypographyProps={{ variant: 'body1', fontWeight: 'medium' }}
              secondaryTypographyProps={{ variant: 'body1', fontWeight: 'medium', sx: { textAlign: 'right' } }}
            />
          </ListItem>
          <ListItem sx={{ py: 1 }}>
            <ListItemText 
              primary="Parts Total:" 
              secondary={`$${partsTotal.toFixed(2)}`}
              primaryTypographyProps={{ variant: 'body1', fontWeight: 'medium' }}
              secondaryTypographyProps={{ variant: 'body1', fontWeight: 'medium', sx: { textAlign: 'right' } }}
            />
          </ListItem>
          <ListItem sx={{ py: 1 }}>
            <ListItemText 
              primary="Misc Total:" 
              secondary={`$${miscTotal.toFixed(2)}`}
              primaryTypographyProps={{ variant: 'body1', fontWeight: 'medium' }}
              secondaryTypographyProps={{ variant: 'body1', fontWeight: 'medium', sx: { textAlign: 'right' } }}
            />
          </ListItem>
        </List>
        <Divider sx={{ my: 2 }} />
        <ListItem sx={{ py: 1, backgroundColor: '#e3f2fd', borderRadius: 1 }}>
          <ListItemText 
            primary="Grand Total:" 
            secondary={`$${grandTotal.toFixed(2)}`}
            primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold', color: 'primary.main' }}
            secondaryTypographyProps={{ variant: 'h6', fontWeight: 'bold', color: 'primary.main', sx: { textAlign: 'right' } }}
          />
        </ListItem>
      </Box>
    )
  }

  return (
    <Drawer
      open={open}
      anchor={anchor}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 350,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ width: 350 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="sidebar tabs">
            <Tab label="Summary" {...a11yProps(0)} />
            <Tab label="Total" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {renderSummaryTab()}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {renderTotalTab()}
        </TabPanel>
      </Box>
    </Drawer>
  )
}

export default Sidebar