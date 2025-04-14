import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarGroup as AvatarGroupUI } from "@aces/ui";

import Avatar1 from "../assets/avatar-1.jpg";
import Avatar2 from "../assets/avatar-2.jpg";
import Avatar3 from "../assets/avatar-3.jpg";
import Avatar4 from "../assets/avatar-4.jpg";
import Avatar5 from "../assets/avatar-5.jpg";

const meta = {
  title: "UI/Avatar Group",
  component: AvatarGroupUI,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    max: 3,
  },
} satisfies Meta<typeof AvatarGroupUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AvatarGroup: Story = {
  render({ max }) {
    return (
      <AvatarGroupUI max={max}>
        <Avatar size={40} image={Avatar1.src} alt="Avatar1" />
        <Avatar size={40} image={Avatar2.src} alt="Avatar2" />
        <Avatar size={40} image={Avatar3.src} alt="Avatar3" />
        <Avatar size={40} image={Avatar4.src} alt="Avatar4" />
        <Avatar size={40} image={Avatar5.src} alt="Avatar5" />
      </AvatarGroupUI>
    );
  },
};
