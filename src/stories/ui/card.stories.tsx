import type { Meta, StoryObj } from "@storybook/react";

import { ImageSize, Spacing } from "@maverick/types";
import { Button, Card as CardUI, H5, Text } from "@maverick/ui";

import AssetsImage from "../assets/assets.png";

interface CardStoryProps {
  raised?: boolean;
  imageSize?: ImageSize;
  paddingX?: Spacing;
  paddingY?: Spacing;
}

const meta = {
  title: "UI/Card",
  // @ts-expect-error: combining types
  component: CardUI,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    raised: {
      control: { type: "boolean" },
    },
    imageSize: {
      control: { type: "select" },
      options: ["fill", "native"],
    },
  },
  args: {
    raised: false,
  },
} satisfies Meta<CardStoryProps>;

export default meta;
type Story = StoryObj<CardStoryProps>;

export const Card: Story = {
  args: {
    raised: false,
    imageSize: "fill",
    paddingX: 2,
    paddingY: 2,
  },
  render({ raised, imageSize, paddingX, paddingY }: CardStoryProps) {
    return (
      <CardUI raised={raised} style={{ width: 350 }}>
        <CardUI.Media
          imageSize={imageSize}
          alt="Card Image"
          image={AssetsImage.src}
          height={200}
        />
        <CardUI.Content paddingX={paddingX} paddingY={paddingY}>
          <H5 marginBottom={2}>Card Title</H5>
          <Text>
            Sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Donec sed odio dui.
          </Text>
        </CardUI.Content>
        <CardUI.Actions marginX={paddingX} marginBottom={marginY}>
          <Button variant="contained" color="primary" size="small">
            Learn More
          </Button>
        </CardUI.Actions>
      </CardUI>
    );
  },
};
