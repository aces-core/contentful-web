import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "@aces/ui";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
    variant: "contained",
    children: "Button",
  },
};

export const PrimaryOutline: Story = {
  args: {
    color: "primary",
    variant: "outlined",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    variant: "contained",
    children: "Button",
  },
};

export const SecondaryOutline: Story = {
  args: {
    color: "secondary",
    variant: "outlined",
    children: "Button",
  },
};
