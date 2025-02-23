import { Document } from "@contentful/rich-text-types";

import { PageLinkProps } from "./pages-types";

// SYS && Base Component Types

export interface CfSystemId {
  sys: {
    id: string;
  };
}

export type CfTypeName = {
  __typename: string;
};

export interface CfFetchById {
  id: string;
  preview: boolean;
  lang: string;
}

export interface CfBaseComponent extends CfTypeName {
  id: string;
  internalTitle: string;
  lang: string;
  preview: boolean;
  sys?: {
    id: string;
  };
}

export interface WithMock {
  mock?: boolean;
  mockData?: React.ReactElement;
}

export interface Nested {
  nested?: boolean;
}

export type CfLocale = {
  locale: string;
  label: string;
};

// Author Component Selection Types

export type CfAlignment = "Left" | "Center" | "Right";

export type CfMediaAlignment = "Left" | "Right";

export type CfMediaSize = "Default" | "Wide" | "Narrow";

export type CfContainerWidth = "Default" | "Narrow";

export type CfHeaderType = "H1" | "H2" | "H3" | "H4" | "H5" | "H6";

export type CfSpacing = "none" | "sm" | "md" | "lg";

export type CfLinkTarget = "_self" | "_blank";

export type CfBorderSelector = "None" | "Top" | "Bottom" | "Top & Bottom";

export type CfColorPicker = {
  id: string;
  name: string;
  value: string;
};

// Reusable CF Types

export type CfRichText = {
  json: Document;
};

export enum CfLinkTypes {
  PageLink = "Page Link",
  CustomLink = "Custom Link",
}

export interface CfLinkProps extends CfBaseComponent {
  title: string;
  linkType: CfLinkTypes;
  pageLink?: PageLinkProps;
  customLink?: string;
  target: CfLinkTarget;
}

export type CfCollectionItems = {
  items: CfCollectionItem[];
};

export type CfCollectionItem = {
  title: string;
  slug: string;
};

export interface CfImageProps extends CfBaseComponent, Nested {
  image: {
    url: string;
    width: number;
    height: number;
  };
  maxWidth?: number;
  maxHeight?: number;
  altText?: string;
  responsive?: boolean;
}
