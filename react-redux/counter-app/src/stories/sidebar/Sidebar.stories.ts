import type { Meta, StoryObj } from '@storybook/react-vite'
import Sidebar from './Sidebar'
import type { DetailsData } from './interface'

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    open: {
      control: 'boolean',
    },
    anchor: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
    onClose: {
      action: 'closed',
    },
  },
}

export default meta
type Story = StoryObj<typeof Sidebar>

const mockDetailsData: DetailsData = {
  id: "detail-1",
  partsNew: "$100.00",
  partsAM: "$150.00",
  partsUsed: "$0.00",
  glass: "$0.00",
  partsOthers: "$0.00",
  paint: "$40.00",
  body: "$25.00",
  mech: "$0.00",
  frame: "$0.00",
  misc: "$0.00",
  detail: "$0.00",
  labourOther: "$0.00",
  sublet: "$0.00",
  customLabour: "$98.90",
  customTax: "$0.00",
  payableTaxes: "$111.53"
}

const mockDetailsData2: DetailsData = {
  id: "detail-2",
  partsNew: "$10.00",
  partsAM: "$50.00",
  partsUsed: "$0.00",
  glass: "$0.00",
  partsOthers: "$0.00",
  paint: "$40.00",
  body: "$25.00",
  mech: "$0.00",
  frame: "$0.00",
  misc: "$0.00",
  detail: "$0.00",
  labourOther: "$0.00",
  sublet: "$0.00",
  customLabour: "$18.90",
  customTax: "$0.00",
  payableTaxes: "$11.53"
}

export const RightSidebarWithData: Story = {
  args: {
    open: true,
    anchor: 'right',
    detailsData: mockDetailsData,
  },
}

export const LeftSidebarWithData: Story = {
  args: {
    open: true,
    anchor: 'left',
    detailsData: mockDetailsData,
  },
}

export const RightSidebarAlternateData: Story = {
  args: {
    open: true,
    anchor: 'right',
    detailsData: mockDetailsData2,
  },
}

export const RightSidebarNoData: Story = {
  args: {
    open: true,
    anchor: 'right',
    detailsData: null,
  },
}

export const ClosedSidebar: Story = {
  args: {
    open: false,
    anchor: 'right',
    detailsData: mockDetailsData,
  },
}