import type { Meta, StoryObj } from '@storybook/react-vite'
import SlatContent from './SlatContent';
import mockData from '../sample-data/mock-data.json';

const meta: Meta<typeof SlatContent> = {
  title: 'Components/SlatContent',
  component: SlatContent,
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof SlatContent>



export const Default: Story = {
  args: {
    items: mockData.items,
  },
}

export const SingleItem: Story = {
  args: {
    items: [mockData.items[0]],
  },
}



// How to use the component with your backend data
//<SlatContent items={backendResponse.items} />