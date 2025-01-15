import { Document } from "@contentful/rich-text-types";
import { CfButtonProps } from "@maverick/cf";
import { PageLinkProps } from "./pages-types";

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

export interface CfFetchByIdNested extends CfFetchById {
  nested?: boolean;
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

export interface CfBaseComponentNested extends CfBaseComponent {
  nested?: boolean;
}

export type CfBorderSelector = "None" | "Top" | "Bottom" | "Top & Bottom";

export type CfAlignment = "Left" | "Center" | "Right";

export type CfMediaAlignment = "Left" | "Right";

export type CfMediaSize = "Default" | "Wide" | "Narrow";

export type CfContainerWidth = "Default" | "Narrow";

export type CfHeaderType = "H1" | "H2" | "H3" | "H4" | "H5" | "H6";

export type CfColorScheme = "Dark" | "Light";

export type CfFontWeight = "Bold" | "Regular";

export type CfSpacing = "none" | "sm" | "md" | "lg";

export type CfColorTheme = CfColorScheme;

export type CfRichText = {
  json: Document;
};

export type CfLink = {
  linkType: CfLinkTypes;
  target: CfLinkTarget;
  pageLink?: PageLinkProps;
  customLink?: string;
};

export enum CfLinkTypes {
  PageLink = "Page Link",
  CustomLink = "Custom Link",
}

export enum CfLinkTypeNames {
  Events = "Events",
  WebinarReplays = "WebinarReplays",
}

export type CfLinkTarget = "_self" | "_blank";

export interface CfLinkProps extends CfBaseComponent {
  title: string;
  linkType: CfLinkTypes;
  pageLink?: PageLinkProps;
  customLink?: string;
  target: CfLinkTarget;
}

export type CfLocale = {
  locale: string;
  label: string;
};

export type CfCollectionItems = {
  items: CfCollectionItem[];
};

export type CfCollectionItem = {
  title: string;
  slug: string;
};

export interface CfMenuItem extends CfBaseComponent {
  title?: string;
  link: CfLinkProps;
  icon?: CfBaseComponent & CfImage;
  excerpt?: string;
  subMenuItemsCollection?: CfBaseComponent & {
    items: {
      title: string;
      link: CfLinkProps;
    }[];
  };
}

export type CfMenuItems = CfMenuItem[];

export type CfMenuItemsCollection = {
  items: CfMenuItem[];
};

export interface CfHeaderNavigationCollectionItem extends CfBaseComponent {
  menuTitle: string;
  solutionsTitle: string;
  solutionMenuItemsCollection: CfMenuItemsCollection;
  secondaryMenuItemsCollection: CfMenuItemsCollection;
  quickLinkItemsCollection: CfMenuItemsCollection;
  menuBanner: CfMenuItem;
  menuItemsCollection: CfMenuItemsCollection;
  mainMenuItemsCollection: CfMenuItemsCollection;
  learnMenuItemsCollection: CfMenuItemsCollection;
  complianceMenuItemsCollection: CfMenuItemsCollection;
  contractMenuItemsCollection: CfMenuItemsCollection;
  title: string;
  link: CfLinkProps;
  buttonStyle: CfButtonProps["buttonStyle"];
}

export interface CfImage extends CfBaseComponent {
  image: {
    url: string;
    width: number;
    height: number;
  };
  maxWidth?: number;
  maxHeight?: number;
  altText?: string;
  nested?: boolean;
  responsive?: boolean;
}

export type CfBrandImage = {
  fullColorLogo: CfImage;
  knockoutLogo: CfImage;
  fullColorIcon: CfImage;
  knockoutIcon: CfImage;
};

export interface CfBrand extends CfBrandImage {
  brandName: string;
  facebook: string;
  xTwitter: string;
  instagram: string;
  linkedin: string;
  youtube: string;
}

export type CfSpeaker = {
  image: CfImage;
  name: string;
  role: string;
};
