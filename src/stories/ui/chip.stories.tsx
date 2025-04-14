import type { Meta, StoryObj } from "@storybook/react";

import { Chip as ChipUI } from "@aces/ui";

const meta = {
  title: "UI/Chip",
  component: ChipUI,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    shape: {
      control: { type: "select" },
      options: ["circular", "rectangular"],
    },
    color: {
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "secondary",
        "error",
        "warning",
        "info",
        "success",
      ],
    },
    variant: {
      control: { type: "select" },
      options: ["filled", "outlined"],
    },
  },
  args: {
    label: "Ridiculus Dapibus",
    color: "primary",
    variant: "filled",
    size: "medium",
    shape: "circular",
    uppercase: true,
  },
} satisfies Meta<typeof ChipUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Chip: Story = {
  args: {},
};
