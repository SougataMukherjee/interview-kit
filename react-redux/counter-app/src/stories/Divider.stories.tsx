import type { Meta, StoryObj } from '@storybook/react-vite';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const meta: Meta<typeof Divider> = {
  title: 'UI/Divider',
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: () => (
    <Box>
      <Typography>Above</Typography>
      <Divider />
      <Typography>Below</Typography>
    </Box>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Box display="flex" alignItems="center" height={100}>
      <Typography>Left</Typography>
      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
      <Typography>Right</Typography>
    </Box>
  ),
};