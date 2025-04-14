import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "@aces/ui";

import Github from "../assets/github.svg";

const meta = {
  title: "UI/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    size: 40,
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageAvatar: Story = {
  args: {
    image: Github.src,
    alt: "Github logo",
  },
};

export const LetterAvatar: Story = {
  args: {
    size: 40,
    children: "M",
  },
  render({ children }) {
    return <Avatar size={40}>{children}</Avatar>;
  },
};
