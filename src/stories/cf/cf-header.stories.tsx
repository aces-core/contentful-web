import type { Meta, StoryObj } from "@storybook/react";

import { CfHeader, CfHeaderProps } from "@aces/cf";

const data = {
  sys: { id: "4ONJ9vaLbF58zPG6qljfu", __typename: "Sys" },
  __typename: "Header",
  internalTitle: "Test Header",
  headline: "Test Header",
  headerType: "H2",
  alignment: "Left",
  containerWidth: "Default",
};

const meta = {
  title: "CF/Header",
  component: CfHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    headerType: {
      control: { type: "select" },
      options: ["H1", "H2", "H3", "H4", "H5", "H6"],
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
    headline: data.headline,
    headerType: data.headerType,
    alignment: data.alignment,
    containerWidth: data.containerWidth,
    nested: false,
    id: data.sys.id,
    lang: "en-US",
    preview: false,
  },
} satisfies Meta<CfHeaderProps>;

export default meta;
type Story = StoryObj<CfHeaderProps>;

export const Header: Story = {
  render({
    headline,
    headerType,
    alignment,
    containerWidth,
    nested,
    id,
    lang,
    preview,
  }: CfHeaderProps) {
    return (
      <CfHeader
        internalTitle={data.internalTitle}
        headline={headline}
        headerType={headerType}
        alignment={alignment}
        containerWidth={containerWidth}
        nested={nested}
        __typename={data.__typename}
        id={id}
        lang={lang}
        preview={preview}
      />
    );
  },
};
