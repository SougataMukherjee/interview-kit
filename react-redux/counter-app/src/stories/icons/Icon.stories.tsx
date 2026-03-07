import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Design System/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
      options: ["user", "home", "customSvg", "customImage"],
    },
    size: {
      control: { type: "number" },
    },
    color: {
      control: { type: "color" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const ReactIconUser: Story = {
  args: {
    name: "user",
    size: 28,
    color: "#1976d2",
  },
};

export const ReactIconHome: Story = {
  args: {
    name: "home",
    size: 32,
    color: "#2e7d32",
  },
};

export const SvgIcon: Story = {
  args: {
    name: "customSvg",
    size: 40,
  },
};

export const PngImageIcon: Story = {
  args: {
    name: "customImage",
    size: 40,
  },
};

export const Playground: Story = {
  args: {
    name: "user",
    size: 24,
    color: "#000000",
  },
};
