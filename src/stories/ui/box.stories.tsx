import type { Meta, StoryObj } from "@storybook/react";

import {
  Box as BoxUI,
  FlexBox as FlexBoxUI,
  InlineBox as InlineBoxUI,
} from "@aces/ui";

const meta = {
  title: "UI/Box",
  component: BoxUI,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof BoxUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Box: Story = {
  render() {
    return (
      <BoxUI style={{ border: "1px dashed grey", padding: 4 }}>
        This Box renders as an HTML section element.
      </BoxUI>
    );
  },
};

export const FlexBox: Story = {
  argTypes: {
    flexDirection: {
      control: { type: "select" },
      options: ["row", "row-reverse", "column", "column-reverse"],
    },
    alignItems: {
      control: { type: "select" },
      options: [
        "flex-start",
        "flex-end",
        "center",
        "baseline",
        "stretch",
        "start",
        "end",
        "self-start",
        "self-end",
        "left",
        "right",
      ],
    },
    justifyContent: {
      control: { type: "select" },
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
        "start",
        "end",
        "left",
        "right",
      ],
    },
  },
  args: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  render({ flexDirection, justifyContent, alignItems }) {
    return (
      <FlexBoxUI
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        alignItems={alignItems}
        style={{ border: "1px dashed grey", padding: 4, minWidth: "400px" }}
      >
        <BoxUI style={{ border: "1px dashed grey", padding: 4 }}>
          InnerBox
        </BoxUI>
        <BoxUI style={{ border: "1px dashed grey", padding: 4 }}>
          InnerBox
        </BoxUI>
      </FlexBoxUI>
    );
  },
};

export const InlineBox: Story = {
  render() {
    return (
      <InlineBoxUI style={{ border: "1px dashed grey", padding: 4 }}>
        This Box renders as an HTML section element.
      </InlineBoxUI>
    );
  },
};
