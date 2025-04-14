import type { Meta, StoryObj } from "@storybook/react";

import { Container as ContainerUI } from "@aces/ui";

const meta = {
  title: "UI/Container",
  component: ContainerUI,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    maxWidth: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "xxl"],
    },
  },
  args: {
    noPadding: false,
    maxWidth: "xl",
    disableGutters: false,
  },
} satisfies Meta<typeof ContainerUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Container: Story = {
  render({ maxWidth, noPadding, disableGutters }) {
    return (
      <ContainerUI
        maxWidth={maxWidth}
        noPadding={noPadding}
        disableGutters={disableGutters}
        style={{ border: "1px dashed grey", padding: 4, width: "100%" }}
      >
        This Container renders as an HTML section element.
      </ContainerUI>
    );
  },
};
