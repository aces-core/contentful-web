import type { Meta, StoryObj } from "@storybook/react";

import { CfImage, CfImageProps } from "@aces/cf";

import AssetsImage from "../assets/styling.png";

const data = {
  sys: { id: "4C1dQLRty7colTsblEsp7E", __typename: "Sys" },
  __typename: "Image",
  internalTitle: "Features Image",
  altText: "Illustration of websites, laptops, and web technology",
  image: {
    __typename: "Asset",
    url: AssetsImage.src,
    width: 850,
    height: 476,
  },
};

const meta = {
  title: "CF/Image",
  component: CfImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    imageUrl: {
      control: { type: "text" },
    },
    altText: {
      control: { type: "text" },
    },
    image: {
      table: {
        disable: true,
      },
    },
    maxWidth: {
      table: {
        disable: true,
      },
    },
    maxHeight: {
      table: {
        disable: true,
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
    imageUrl: AssetsImage.src,
    altText: data.altText,
    responsive: true,
    nested: false,
    id: data.sys.id,
    lang: "en-US",
    preview: false,
  },
} satisfies Meta<CfImageProps>;

export default meta;
type Story = StoryObj<CfImageProps>;

export const Image: Story = {
  render({
    imageUrl,
    altText,
    nested,
    responsive,
    id,
    lang,
    preview,
  }: CfImageProps) {
    const imageObject = {
      __typename: "Asset",
      url: imageUrl,
      width: 850,
      height: 476,
      altText: altText,
    };

    return (
      <CfImage
        internalTitle={data.internalTitle}
        image={imageObject}
        nested={nested}
        responsive={responsive}
        __typename={data.__typename}
        id={id}
        lang={lang}
        preview={preview}
      />
    );
  },
};
