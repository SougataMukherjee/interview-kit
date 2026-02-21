import React from 'react'
import { Box, Grid, Collapse } from '@mui/material'

export interface SlatItem {
  id: string | number
  columns: React.ReactNode[] // exactly 3 columns
  details: React.ReactNode
}

export interface SlatContentProps {
  data: SlatItem[]
}

const SlatContent: React.FC<SlatContentProps> = ({ data }) => {
  const [openId, setOpenId] = React.useState<string | number | null>(null)

  const handleToggle = (id: string | number) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <Box>
      {data.map((item) => {
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
              onClick={() => handleToggle(item.id)}
              sx={{
                cursor: 'pointer',
                padding: 2,
                backgroundColor: isOpen ? '#f9f9f9' : '#fff',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
              }}
            >
              <Grid container spacing={2}>
                {item.columns.map((col, index) => (
                  <Grid item xs={4} key={index}>
                    {col}
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* EXPANDABLE CONTENT */}
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
              <Box sx={{ padding: 2, backgroundColor: '#fafafa' }}>
                {item.details}
              </Box>
            </Collapse>
          </Box>
        )
      })}
    </Box>
  )
}

export default SlatContent

{/* <SlatContent data={backendResponse.map(item => ({
  id: item.id,
  columns: [
    item.orderId,
    item.customerName,
    item.amount,
  ],
  details: <OrderDetails data={item} />,
}))} */}