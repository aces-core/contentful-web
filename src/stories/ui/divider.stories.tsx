import type { Meta, StoryObj } from "@storybook/react";

import { Box, Text, Divider as DividerUI } from "@aces/ui";

const meta = {
  title: "UI/Divider",
  component: DividerUI,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    marginX: {
      control: { type: "number" },
    },
    marginY: {
      control: { type: "number" },
    },
  },
  args: {
    marginX: 0,
    marginY: 2,
  },
} satisfies Meta<typeof DividerUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Divider: Story = {
  render({ marginX, marginY }) {
    return (
      <Box style={{ border: "1px dashed grey", padding: 4, width: "100%" }}>
        <Text>Cras Venenatis Magna Bibendum.</Text>
        <DividerUI marginX={marginX} marginY={marginY} />
        <Text>Mollis Venenatis Vehicula Ornare Dapibus.</Text>
      </Box>
    );
  },
};
