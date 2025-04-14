import type { Meta, StoryObj } from "@storybook/react";

import { CfLockup, CfLockupProps } from "@aces/cf";

import AssetsImage from "../assets/testing.png";

const defaultIframeSrc =
  "https://www.youtube.com/embed/jfKfPfyJRdk?si=9fIKzXmC1LsLSzDj";

const data = {
  sys: { id: "4PDygO94cKt2Akim5pGwZY", __typename: "Sys" },
  __typename: "Lockup",
  bodyCopy: {
    json: {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                "Whether you're building a corporate website, a content hub, or a dynamic marketing platform, Maverick is your go-to solution for:",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: "Intuitive page-building components",
                      nodeType: "text",
                    },
                  ],
                  nodeType: "paragraph",
                },
              ],
              nodeType: "list-item",
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: "Flexible page templates for faster launches",
                      nodeType: "text",
                    },
                  ],
                  nodeType: "paragraph",
                },
              ],
              nodeType: "list-item",
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: "Advanced site search and SEO tools",
                      nodeType: "text",
                    },
                  ],
                  nodeType: "paragraph",
                },
              ],
              nodeType: "list-item",
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: "Scalable content types like Articles and Events",
                      nodeType: "text",
                    },
                  ],
                  nodeType: "paragraph",
                },
              ],
              nodeType: "list-item",
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        "Seamless integration with Contentful's composable architecture",
                      nodeType: "text",
                    },
                  ],
                  nodeType: "paragraph",
                },
              ],
              nodeType: "list-item",
            },
          ],
          nodeType: "unordered-list",
        },
        {
          data: {},
          content: [{ data: {}, marks: [], value: "", nodeType: "text" }],
          nodeType: "paragraph",
        },
      ],
      nodeType: "document",
    },
    __typename: "LockupBodyCopy",
  },
  internalTitle: "Maverick Key Features Lockup",
  headline: "Maverick: Key Features",
  mediaSize: "Default",
  mediaAlignment: "Right",
  media: {},
};

const singleButtonCollectionData = {
  __typename: "LockupButtonsCollection",
  items: [
    {
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
    },
  ],
};

const multipleButtonCollectionData = {
  __typename: "LockupButtonsCollection",
  items: [
    {
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
    },
    {
      sys: { id: "38FyOYYGK6rJCVVllBpSfM", __typename: "Sys" },
      __typename: "Button",
      internalTitle: "Test Button",
      title: "Test",
      buttonStyle: "Primary Outline",
      link: {
        __typename: "Link",
        internalTitle: "Test Link",
        linkType: "Custom Link",
        pageLink: null,
        customLink: "https://google.com",
        target: "_self",
      },
    },
  ],
};

const meta = {
  title: "CF/Lockup",
  component: CfLockup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    mediaSize: {
      control: { type: "select" },
      options: ["Default", "Wide", "Narrow"],
    },
    mediaAlignment: {
      control: { type: "select" },
      options: ["Left", "Right"],
    },
    buttonsCollection: {
      control: { type: "select" },
      options: ["No Buttons", "Single Button", "Multiple Buttons"],
      mapping: {
        "No Buttons": null,
        "Single Button": singleButtonCollectionData,
        "Multiple Buttons": multipleButtonCollectionData,
      },
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
    mock: {
      table: {
        disable: true,
      },
    },
    mockData: {
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
    bodyCopy: {
      table: {
        disable: true,
      },
    },
    nested: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    headline: data.headline,
    mediaSize: data.mediaSize,
    mediaAlignment: data.mediaAlignment,
    nested: false,
    id: data.sys.id,
    lang: "en-US",
    preview: false,
    mock: true,
    buttonsCollection: "Single Button",
  },
} satisfies Meta<CfLockupProps>;

export default meta;
type Story = StoryObj<CfLockupProps>;

const MockImage = ({ media }) => {
  return (
    <div>
      <img src={media} alt="MockImage" style={{ width: "100%" }} />
    </div>
  );
};

export const LockupImage: Story = {
  args: {
    media: AssetsImage.src,
  },
  argTypes: {
    media: {
      control: { type: "text" },
    },
  },
  render({
    headline,
    mediaSize,
    mediaAlignment,
    media,
    nested,
    buttonsCollection,
    id,
    lang,
    preview,
  }: CfLockupProps) {
    return (
      <CfLockup
        internalTitle={data.internalTitle}
        headline={headline}
        bodyCopy={data.bodyCopy}
        buttonsCollection={buttonsCollection}
        media={data.media}
        mediaSize={mediaSize}
        mediaAlignment={mediaAlignment}
        nested={nested}
        mock={true}
        mockData={<MockImage media={media} />}
        __typename={data.__typename}
        id={id}
        lang={lang}
        preview={preview}
      />
    );
  },
};

const MockVideo = ({ media }) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        src={media}
        style={{ width: "100%", height: "100%", aspectRatio: "16 / 9" }}
      />
    </div>
  );
};

export const LockupVideo: Story = {
  args: {
    media: defaultIframeSrc,
  },
  argTypes: {
    media: {
      control: { type: "text" },
    },
  },
  render({
    headline,
    mediaSize,
    mediaAlignment,
    media,
    nested,
    buttonsCollection,
    id,
    lang,
    preview,
  }: CfLockupProps) {
    return (
      <CfLockup
        internalTitle={data.internalTitle}
        headline={headline}
        bodyCopy={data.bodyCopy}
        buttonsCollection={buttonsCollection}
        media={data.media}
        mediaSize={mediaSize}
        mediaAlignment={mediaAlignment}
        nested={nested}
        mock={true}
        mockData={<MockVideo media={media} />}
        __typename={data.__typename}
        id={id}
        lang={lang}
        preview={preview}
      />
    );
  },
};
