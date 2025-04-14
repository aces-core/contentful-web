import type { Meta, StoryObj } from "@storybook/react";

import {
  Accordion,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
} from "@aces/ui";

const meta: Meta<typeof Accordion> = {
  title: "UI/Accordions",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <Accordion>
      <AccordionItem style={{ color: "common.black" }}>
        <AccordionItemTrigger expandIconPosition="start" disableGutters={true}>
          Accordion Headline
        </AccordionItemTrigger>
        <AccordionItemContent>
          Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper
          nulla non metus auctor fringilla. Integer posuere erat a ante
          venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus
          sit amet fermentum. Cras mattis consectetur purus sit amet fermentum.
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </AccordionItemContent>
      </AccordionItem>
    </Accordion>
  ),
};
