import type { Meta, StoryObj } from '@storybook/react-vite'
import WorkInProgress from './WorkInProgress'

const mockItems = {
  "items": [
    // Row 1
    {
      "id": "RO-12345",
      "itemStatus": "UNCHECKED" as const,
      "slatType": "CHECKABLE" as const,
      "isDeletable": true,
      "itemData": {
        "description": {
          "roNumber": "12345",
          "name": "Roger Shapiro",
          "vehicle": "2005 Audi A4",
          "estimator": "Jeff Toom"
        },
        "details": {
          "preferenceCompany": "Canada Dev/Quarterly",
          "shop": "Preferred Check Shops 2158",
          "dueIn": "9/7/2024",
          "dueOut": "9/7/2024"
        },
        "dates": {
          "started": "9/7/2024",
          "completed": "9/7/2024",
          "deliveryDate": "9/7/2024",
          "totalCosts": "$198.34"
        },
        "amounts": {
          "salesTotal": "$190.00",
          "subtotal": "$198.34",
          "salesTotal2": "$198.34",
          "grossProfitAmount": "$198.34"
        },
        "percentages": {
          "grossProfitPercent": "18%",
          "hrsProfit": "20.00",
          "hrsPercent": "15.00",
          "hrsLeft": "5.00"
        }
      },
      "detailsData": {
        "id": "detail-1",
        "partsNew": "$100.00",
        "partsAM": "$150.00",
        "partsUsed": "$0.00",
        "glass": "$0.00",
        "partsOthers": "$0.00",
        "paint": "$40.00",
        "body": "$25.00",
        "mech": "$0.00",
        "frame": "$0.00",
        "misc": "$0.00",
        "detail": "$0.00",
        "labourOther": "$0.00",
        "sublet": "$0.00",
        "customLabour": "$98.90",
        "customTax": "$0.00",
        "payableTaxes": "$111.53"
      }
    },
    // Row 2
    {
      "id": "RO-12346",
      "itemStatus": "CHECKED" as const,
      "slatType": "CHECKABLE" as const,
      "isDeletable": true,
      "itemData": {
        "description": {
          "roNumber": "12346",
          "name": "Sarah Johnson",
          "vehicle": "2018 Honda Civic",
          "estimator": "Mike Chen"
        },
        "details": {
          "preferenceCompany": "Auto Services",
          "shop": "Elite Repair Center 1205",
          "dueIn": "9/8/2024",
          "dueOut": "9/10/2024"
        },
        "dates": {
          "started": "9/8/2024",
          "completed": "9/9/2024",
          "deliveryDate": "9/10/2024",
          "totalCosts": "$425.67"
        },
        "amounts": {
          "salesTotal": "$450.00",
          "subtotal": "$425.67",
          "salesTotal2": "$425.67",
          "grossProfitAmount": "$24.33"
        },
        "percentages": {
          "grossProfitPercent": "5.4%",
          "hrsProfit": "15.50",
          "hrsPercent": "12.00",
          "hrsLeft": "3.50"
        }
      },
      "detailsData": {
        "id": "detail-2",
        "partsNew": "$10.00",
        "partsAM": "$50.00",
        "partsUsed": "$0.00",
        "glass": "$0.00",
        "partsOthers": "$0.00",
        "paint": "$40.00",
        "body": "$25.00",
        "mech": "$0.00",
        "frame": "$0.00",
        "misc": "$0.00",
        "detail": "$0.00",
        "labourOther": "$0.00",
        "sublet": "$0.00",
        "customLabour": "$18.90",
        "customTax": "$0.00",
        "payableTaxes": "$11.53"
      }
    },
    // Row 3
    {
      "id": "RO-12347",
      "itemStatus": "INFO" as const,
      "slatType": "INFO" as const,
      "isDeletable": false,
      "infoStatusMessage": "Pending customer approval for additional repairs",
      "itemData": {
        "description": {
          "roNumber": "12347",
          "name": "David Wilson",
          "vehicle": "2020 Toyota Camry",
          "estimator": "Lisa Park"
        },
        "details": {
          "preferenceCompany": "Express Auto Group",
          "shop": "Quick Fix Garage 3401",
          "dueIn": "9/9/2024",
          "dueOut": "9/12/2024"
        },
        "dates": {
          "started": "9/9/2024",
          "completed": "Pending",
          "deliveryDate": "TBD",
          "totalCosts": "$312.89"
        },
        "amounts": {
          "salesTotal": "$350.00",
          "subtotal": "$312.89",
          "salesTotal2": "$312.89",
          "grossProfitAmount": "$37.11"
        },
        "percentages": {
          "grossProfitPercent": "10.6%",
          "hrsProfit": "25.75",
          "hrsPercent": "18.50",
          "hrsLeft": "7.25"
        }
      },
      "detailsData": {
        "id": "detail-3",
        "partsNew": "$103.00",
        "partsAM": "$120.00",
        "partsUsed": "$0.00",
        "glass": "$0.00",
        "partsOthers": "$0.00",
        "paint": "$10.00",
        "body": "$27.00",
        "mech": "$0.00",
        "frame": "$0.00",
        "misc": "$0.00",
        "detail": "$0.00",
        "labourOther": "$0.00",
        "sublet": "$0.00",
        "customLabour": "$38.90",
        "customTax": "$0.00",
        "payableTaxes": "$191.53"
      }
    }
  ]
}
const meta: Meta<typeof WorkInProgress> = {
  title: 'Pages/WorkInProgress',
  component: WorkInProgress,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof WorkInProgress>

export const Default: Story = {
  args: {
    items: mockItems.items,
  },
}