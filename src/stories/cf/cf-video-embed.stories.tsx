import type { Meta, StoryObj } from "@storybook/react";

import { CfVideoEmbed, CfVideoEmbedProps } from "@aces/cf";

const data = {
  sys: { id: "6PI6ArmdlntKHSb40dRQF1", __typename: "Sys" },
  __typename: "VideoEmbed",
  internalTitle: "Test Video",
};

const meta = {
  title: "CF/Video Embed",
  component: CfVideoEmbed,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    embedCode: {
      control: { type: "text" },
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
    nested: {
      table: {
        disable: true,
      },
    },
    marginBottom: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    embedCode:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/mlH4EbImsDw?si=JtpD8C0fFlhlr4Ir" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    nested: false,
    id: data.sys.id,
    lang: "en-US",
    preview: false,
  },
} satisfies Meta<CfVideoEmbedProps>;

export default meta;
type Story = StoryObj<CfVideoEmbedProps>;

export const VideoEmbed: Story = {
  render({ embedCode, nested, id, lang, preview }: CfVideoEmbedProps) {
    return (
      <CfVideoEmbed
        internalTitle={data.internalTitle}
        embedCode={embedCode}
        nested={nested}
        __typename={data.__typename}
        id={id}
        lang={lang}
        preview={preview}
      />
    );
  },
};
