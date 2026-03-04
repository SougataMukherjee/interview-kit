import type { Meta, StoryObj } from '@storybook/react-vite';
import Box from '@mui/material/Box';

const meta: Meta<typeof Box> = {
  title: 'UI/Box',
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Basic: Story = {
  render: () => (
    <Box
      sx={{
        width: 200,
        height: 100,
        bgcolor: 'primary.main',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
      }}
    >
      MUI Box
    </Box>
  ),
};

export const FlexExample: Story = {
  render: () => (
    <Box display="flex" gap={2}>
      <Box width={50} height={50} bgcolor="secondary.main" />
      <Box width={50} height={50} bgcolor="primary.main" />
    </Box>
  ),
};