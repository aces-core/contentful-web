import type { Meta, StoryObj } from "@storybook/react";

import { CfAccordions, CfAccordionsProps } from "@aces/cf";

const data = {
  sys: { id: "3AqVqvQgsyvS7BFXmTIA3e", __typename: "Sys" },
  __typename: "Accordions",
  internalTitle: "Test Accordions",
  accordionsCollection: {
    __typename: "AccordionsAccordionsCollection",
    items: [
      {
        __typename: "Accordion",
        bodyCopy: {
          json: {
            nodeType: "document",
            data: {},
            content: [
              {
                nodeType: "paragraph",
                data: {},
                content: [
                  {
                    nodeType: "text",
                    value:
                      "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id ",
                    marks: [],
                    data: {},
                  },
                  {
                    nodeType: "text",
                    value: " elit non mi porta gravida at eget metus.",
                    marks: [],
                    data: {},
                  },
                ],
              },
            ],
          },
          __typename: "AccordionBodyCopy",
        },
        internalTitle: "Accordion 1",
        headline: "Mollis Magna Malesuada",
      },
      {
        __typename: "Accordion",
        bodyCopy: {
          json: {
            nodeType: "document",
            data: {},
            content: [
              {
                nodeType: "paragraph",
                data: {},
                content: [
                  {
                    nodeType: "text",
                    value:
                      "Etiam porta sem malesuada magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.",
                    marks: [],
                    data: {},
                  },
                ],
              },
            ],
          },
          __typename: "AccordionBodyCopy",
        },
        internalTitle: "Accordion 2",
        headline: "Sollicitudin Sem Tellus",
      },
    ],
  },
};

const headlineData = {
  headline: "Nulla vitae elit libero",
};

const bodyCopyData = {
  bodyCopy: {
    json: {
      nodeType: "document",
      data: {},
      content: [
        {
          nodeType: "paragraph",
          data: {},
          content: [
            {
              nodeType: "text",
              value:
                "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo  odio, dapibus ac facilisis in, egestas eget quam.",
              marks: [],
              data: {},
            },
          ],
        },
        {
          nodeType: "paragraph",
          data: {},
          content: [{ nodeType: "text", value: "", marks: [], data: {} }],
        },
      ],
    },
    __typename: "AccordionsBodyCopy",
  },
};

const meta = {
  title: "CF/Accordions",
  component: CfAccordions,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    headline: {
      control: { type: "boolean" },
    },
    bodyCopy: {
      control: { type: "boolean" },
    },
    id: {
      table: {
        disable: true,
      },
    },
    lang: {
      table: {
        disable: true,
      },
    },
    preview: {
      table: {
        disable: true,
      },
    },
    __typename: {
      table: {
        disable: true,
      },
    },
    internalTitle: {
      table: {
        disable: true,
      },
    },
    sys: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    headline: true,
    bodyCopy: true,
    accordionsCollection: data.accordionsCollection,
    id: data.sys.id,
    lang: "en-US",
    preview: false,
  },
} satisfies Meta<CfAccordionsProps>;

export default meta;
type Story = StoryObj<CfAccordionsProps>;

export const Accordions: Story = {
  render({
    headline,
    bodyCopy,
    accordionsCollection,
    id,
    lang,
    preview,
  }: CfAccordionsProps) {
    const headlineValue = headline ? headlineData.headline : null;
    const bodyCopyValue = bodyCopy ? bodyCopyData.bodyCopy : null;

    return (
      <CfAccordions
        internalTitle={data.internalTitle}
        headline={headlineValue}
        bodyCopy={bodyCopyValue}
        accordionsCollection={accordionsCollection}
        __typename={data.__typename}
        id={id}
        lang={lang}
        preview={preview}
      />
    );
  },
};
