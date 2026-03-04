import type { Meta, StoryObj } from '@storybook/react-vite';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip title="Tooltip message">
      <Button variant="contained">Hover me</Button>
    </Tooltip>
  ),
};

export const PlacementExamples: Story = {
  render: () => (
    <>
      <Tooltip title="Top" placement="top">
        <Button sx={{ m: 1 }}>Top</Button>
      </Tooltip>
      <Tooltip title="Right" placement="right">
        <Button sx={{ m: 1 }}>Right</Button>
      </Tooltip>
    </>
  ),
};