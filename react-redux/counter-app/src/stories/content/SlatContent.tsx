import React from 'react'
import { Box, Grid, Collapse, Typography } from '@mui/material'

export interface ItemDescription {
  roNumber: string
  name: string
  vehicle: string
  estimator: string
}

export interface ItemDetails {
  preferenceCompany: string
  shop: string
  dueIn: string
  dueOut: string
}

export interface ItemDates {
  started: string
  completed: string
  deliveryDate: string
  totalCosts: string
}

export interface ItemAmounts {
  salesTotal: string
  subtotal: string
  salesTotal2: string
  grossProfitAmount: string
}

export interface ItemPercentages {
  grossProfitPercent: string
  hrsProfit: string
  hrsPercent: string
  hrsLeft: string
}

export interface ItemData {
  description: ItemDescription
  details: ItemDetails
  dates: ItemDates
  amounts: ItemAmounts
  percentages: ItemPercentages
}

export interface DetailsData {
  id: string
  partsNew: string
  partsAM: string
  partsUsed: string
  glass: string
  partsOthers: string
  paint: string
  body: string
  mech: string
  frame: string
  misc: string
  detail: string
  labourOther: string
  sublet: string
  customLabour: string
  customTax: string
  payableTaxes: string
}

export interface SlatItem {
  id: string
  itemStatus: 'UNCHECKED' | 'CHECKED' | 'INFO'
  slatType: 'CHECKABLE' | 'INFO'
  isDeletable: boolean
  infoStatusMessage?: string
  itemData: ItemData
  detailsData: DetailsData
}

export interface SlatContentProps {
  items: SlatItem[],
  onItemSelect: (item: SlatItem) => void,
  sidebarOpen?:boolean
}

const SlatContent: React.FC<SlatContentProps> = ({ items,onItemSelect,sidebarOpen }) => {
  const [openId, setOpenId] = React.useState<string | null>(null)

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }


  const renderDetailsContent = (item: SlatItem) => {
    const { detailsData } = item
    
    return (
      <Box>

        

        {/* Details Breakdown Section */}
        <Box sx={{ backgroundColor: '#f5f5f5', p: 2, borderRadius: 1 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Cost Breakdown</Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={6} md={2}>
              <Typography variant="body2" fontWeight="bold">Parts New:</Typography>
              <Typography variant="body2">{detailsData.partsNew}</Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="body2" fontWeight="bold">Parts AM:</Typography>
              <Typography variant="body2">{detailsData.partsAM}</Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="body2" fontWeight="bold">Parts Used:</Typography>
              <Typography variant="body2">{detailsData.partsUsed}</Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="body2" fontWeight="bold">Glass:</Typography>
              <Typography variant="body2">{detailsData.glass}</Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="body2" fontWeight="bold">Parts Others:</Typography>
              <Typography variant="body2">{detailsData.partsOthers}</Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="body2" fontWeight="bold">Paint:</Typography>
              <Typography variant="body2">{detailsData.paint}</Typography>
            </Grid>
            
            <Grid item xs={6} md={2}>
              <Typography variant="body2" fontWeight="bold">Body:</Typography>
              <Typography variant="body2">{detailsData.body}</Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="body2" fontWeight="bold">Mech:</Typography>
              <Typography variant="body2">{detailsData.mech}</Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="body2" fontWeight="bold">Frame:</Typography>
              <Typography variant="body2">{detailsData.frame}</Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="body2" fontWeight="bold">Misc:</Typography>
              <Typography variant="body2">{detailsData.misc}</Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="body2" fontWeight="bold">Detail:</Typography>
              <Typography variant="body2">{detailsData.detail}</Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="body2" fontWeight="bold">Labour Other:</Typography>
              <Typography variant="body2">{detailsData.labourOther}</Typography>
            </Grid>
            
            <Grid item xs={6} md={2}>
              <Typography variant="body2" fontWeight="bold">Sublet:</Typography>
              <Typography variant="body2">{detailsData.sublet}</Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="body2" fontWeight="bold">Custom Labour:</Typography>
              <Typography variant="body2">{detailsData.customLabour}</Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="body2" fontWeight="bold">Custom Tax:</Typography>
              <Typography variant="body2">{detailsData.customTax}</Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="body2" fontWeight="bold">Payable Taxes:</Typography>
              <Typography variant="body2">{detailsData.payableTaxes}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    )
  }
const EllipsisText = ({ children }: { children: React.ReactNode }) => (
  <Typography
    variant="body2"
    noWrap
    sx={{
      maxWidth: '100%',
    }}
    title={String(children)} // tooltip on hover
  >
    {children}
  </Typography>
);

  return (
    <Box>
      {items.map((item) => {
        const isOpen = openId === item.id

        return (
          <Box
            key={item.id}
            sx={{
              borderBottom: '1px solid #e0e0e0',
            }}
          >
            {/* SLAT ROW */}
            <Box
              onClick={() => {
                  if (sidebarOpen) {
                    onItemSelect(item)
                  } else {
                    handleToggle(item.id)
                  }
                }}
              sx={{
                cursor: 'pointer',
                padding: 2,
                backgroundColor: isOpen ? '#f9f9f9' : '#fff',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
              }}
            >
              {/* <Grid container spacing={2} alignItems="center">
                <Grid item xs={4}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip 
                      label={item.itemStatus} 
                      color={getStatusColor(item.itemStatus) as any}
                      size="small"
                    />
                    <Typography variant="body2" fontWeight="bold">
                      {item.itemData.description.roNumber}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {item.itemData.description.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.itemData.description.vehicle}
                  </Typography>
                </Grid>
                
                <Grid item xs={4}>
                  <Typography variant="body2">
                    {item.itemData.details.preferenceCompany}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.itemData.details.shop}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Due: {item.itemData.details.dueOut}
                  </Typography>
                </Grid>
                
                <Grid item xs={4}>
                  <Typography variant="body2" fontWeight="bold">
                    {item.itemData.amounts.salesTotal}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Profit: {item.itemData.percentages.grossProfitPercent}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Hrs Left: {item.itemData.percentages.hrsLeft}
                  </Typography>
                </Grid>
              </Grid> */}
              <Grid container spacing={2} sx={{ mb: 3 ,flexWrap:'nowrap'}} >
  {/* Column 1 */}
  <Grid item xs={12} md={2.4} >
    <EllipsisText>RO#: {item.itemData.description.roNumber}</EllipsisText>
    <EllipsisText>Name: {item.itemData.description.name}</EllipsisText>
    <EllipsisText>Vehicle: {item.itemData.description.vehicle}</EllipsisText>
    <EllipsisText>Estimator: {item.itemData.description.estimator}</EllipsisText>
  </Grid>

  {/* Column 2 */}
  <Grid item xs={12} md={2.4}>
    <EllipsisText>
      Preference Company: {item.itemData.details.preferenceCompany}
    </EllipsisText>
    <EllipsisText>Shop: {item.itemData.details.shop}</EllipsisText>
    <EllipsisText>Due In: {item.itemData.details.dueIn}</EllipsisText>
    <EllipsisText>Due Out: {item.itemData.details.dueOut}</EllipsisText>
  </Grid>

  {/* Column 3 */}
  <Grid item xs={12} md={2.4}>
    <EllipsisText>Started: {item.itemData.dates.started}</EllipsisText>
    <EllipsisText>Completed: {item.itemData.dates.completed}</EllipsisText>
    <EllipsisText>
      Delivery Date: {item.itemData.dates.deliveryDate}
    </EllipsisText>
    <EllipsisText>
      Total Costs: {item.itemData.dates.totalCosts}
    </EllipsisText>
  </Grid>

  {/* Column 4 */}
  <Grid item xs={12} md={2.4}>
    <EllipsisText>
      Sales Total: {item.itemData.amounts.salesTotal}
    </EllipsisText>
    <EllipsisText>
      Subtotal: {item.itemData.amounts.subtotal}
    </EllipsisText>
    <EllipsisText>
      Sales Total 2: {item.itemData.amounts.salesTotal2}
    </EllipsisText>
    <EllipsisText>
      Gross Profit: {item.itemData.amounts.grossProfitAmount}
    </EllipsisText>
  </Grid>

  {/* Column 5 */}
  <Grid item xs={12} md={2.4}>
    <EllipsisText>
      Gross Profit %: {item.itemData.percentages.grossProfitPercent}
    </EllipsisText>
    <EllipsisText>
      Hrs Profit: {item.itemData.percentages.hrsProfit}
    </EllipsisText>
    <EllipsisText>
      Hrs %: {item.itemData.percentages.hrsPercent}
    </EllipsisText>
    <EllipsisText>
      Hrs Left: {item.itemData.percentages.hrsLeft}
    </EllipsisText>
  </Grid>
</Grid>
             
            </Box>

            {/* EXPANDABLE CONTENT */}
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
              <Box sx={{ padding: 2, backgroundColor: '#fafafa' }}>
                {renderDetailsContent(item)}
              </Box>
            </Collapse>
          </Box>
        )
      })}
    </Box>
  )
}

export default SlatContent