import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox as CheckboxUI } from "@aces/ui";

const meta = {
  title: "UI/Checkbox",
  component: CheckboxUI,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
  args: {
    size: "medium",
  },
} satisfies Meta<typeof CheckboxUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {
  args: {},
};
