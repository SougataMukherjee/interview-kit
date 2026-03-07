import type { Meta, StoryObj } from "@storybook/react-vite";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const meta: Meta<typeof CircularProgress> = {
  title: "UI/CircularProgress",
  component: CircularProgress,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const Default: Story = {
  args: {
    size: 40,
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <Box display="flex" gap={3}>
      <CircularProgress size={30} />
      <CircularProgress size={50} />
      <CircularProgress size={70} />
    </Box>
  ),
};

export const WithThickness: Story = {
  args: {
    size: 60,
    thickness: 6,
  },
};
