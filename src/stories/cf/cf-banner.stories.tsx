import type { Meta, StoryObj } from "@storybook/react";

import { CfBanner, CfBannerProps } from "@aces/cf";

const data = {
  sys: { id: "4Xge1jtY5RvamZgp85wMz", __typename: "Sys" },
  __typename: "Banner",
  internalTitle: "Test Banner",
  headline: "Bibendum Adipiscing Fermentum",
  subhead:
    "Nullam quis risus eget urna mollis ornare vel eu leo. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
  backgroundColor: {
    id: "5b1f41f1-4632-44de-99af-7fe83bd8a1ff",
    name: "Orange",
    value: "#dea500",
  },
};

const buttonPrimaryData = {
  sys: { id: "7ptlRiLOobN5A6GyzPJmkk", __typename: "Sys" },
  __typename: "Button",
  internalTitle: "See All Features Primary Button",
  title: "See All Features",
  buttonStyle: "Primary",
  link: {
    __typename: "Link",
    internalTitle: "Features Page Link",
    linkType: "Page Link",
    customLink: null,
    target: "_self",
    pageLink: { __typename: "Page", slug: "features" },
  },
};

const buttonSecondaryData = {
  sys: { id: "7ptlRiLOobN5A6GyzPJmkk", __typename: "Sys" },
  __typename: "Button",
  internalTitle: "See All Features Primary Button",
  title: "See All Features",
  buttonStyle: "Secondary",
  link: {
    __typename: "Link",
    internalTitle: "Features Page Link",
    linkType: "Page Link",
    customLink: null,
    target: "_self",
    pageLink: { __typename: "Page", slug: "features" },
  },
};

const meta = {
  title: "CF/Banner",
  component: CfBanner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    button: {
      control: { type: "select" },
      options: ["No Button", "Button"],
    },
    backgroundColor: {
      control: { type: "select" },
      options: ["Blue", "Orange"],
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
    subhead: data.subhead,
    button: "Button",
    backgroundColor: "Orange",
    id: data.sys.id,
    lang: "en-US",
    preview: false,
  },
} satisfies Meta<CfBannerProps>;

export default meta;
type Story = StoryObj<CfBannerProps>;

export const Banner: Story = {
  render({
    headline,
    subhead,
    backgroundColor,
    button,
    id,
    lang,
    preview,
  }: CfBannerProps) {
    const backgroundColorObject = {
      id: "5b1f41f1-4632-44de-99af-7fe83bd8a1ff",
      name: backgroundColor,
      value: backgroundColor === "Orange" ? "#dea500" : "#005ea2",
    };

    const buttonData =
      backgroundColor === "Orange" ? buttonPrimaryData : buttonSecondaryData;

    return (
      <CfBanner
        internalTitle={data.internalTitle}
        headline={headline}
        subhead={subhead}
        button={button === "Button" ? buttonData : null}
        backgroundColor={backgroundColorObject}
        __typename={data.__typename}
        id={id}
        lang={lang}
        preview={preview}
      />
    );
  },
};
