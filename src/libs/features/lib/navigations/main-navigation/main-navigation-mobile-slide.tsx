"use client";

import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent } from "@aces/types";
import { Box } from "@aces/ui";
import { CfButton, CfButtonProps } from "@aces/cf";

import {
  CfDropDownMenuType,
  CfMenuItemType,
  MobileMenuSlideItem,
  isCfButton,
  isCfDropDownMenu,
  isCfMenuItem,
  MobileMenuItem,
} from "../menus";

interface MainNavigationMobileSlideTopLevelProps
  extends Pick<CfBaseComponent, "id" | "lang"> {
  data: (CfMenuItemType | CfDropDownMenuType | CfButtonProps)[];
}

export const MainNavigationMobileSlideTopLevel = ({
  data,
  id,
  lang,
}: MainNavigationMobileSlideTopLevelProps) => {
  return (
    <Box
      {...ContentfulLivePreview.getProps({
        entryId: id,
        fieldId: "mainNavigation",
        locale: lang,
      })}
    >
      {data.map((item, index) => {
        const typename = item.__typename;

        if (!typename) {
          return null;
        }

        switch (typename) {
          case "MenuItem":
            if (isCfMenuItem(item)) {
              return <MobileMenuItem key={index} item={item} lang={lang} />;
            }
            break;
          case "DropdownMenu":
            if (isCfDropDownMenu(item)) {
              return <MobileMenuSlideItem key={index} item={item} />;
            }
            break;
          case "Button":
            if (isCfButton(item)) {
              return (
                <Box key={index} marginY={2} paddingX={6}>
                  <CfButton
                    internalTitle={item.internalTitle}
                    buttonStyle={item.buttonStyle}
                    title={item.title}
                    link={item.link}
                    rightIcon={item.rightIcon}
                    fullWidthMobile
                    __typename={item.__typename}
                    id={item?.sys?.id || ""}
                    preview={item.preview}
                    lang={lang}
                  />
                </Box>
              );
            }
            break;
          default:
            return null;
        }
      })}
    </Box>
  );
};

export const MainNavigationMobileSlideSubLevel = ({
  data,
  id,
  lang,
}: MainNavigationMobileSlideTopLevelProps) => {
  return (
    <Box
      {...ContentfulLivePreview.getProps({
        entryId: id,
        fieldId: "mainNavigation",
        locale: lang,
      })}
    >
      {data.map((item, index) => {
        const typename = item.__typename;

        if (!typename) {
          return null;
        }

        switch (typename) {
          case "MenuItem":
            if (isCfMenuItem(item)) {
              return <MobileMenuItem key={index} item={item} lang={lang} />;
            }
            break;
          case "DropdownMenu":
            if (isCfDropDownMenu(item)) {
              return <MobileMenuSlideItem key={index} item={item} />;
            }
            break;
          case "Button":
            if (isCfButton(item)) {
              return (
                <Box key={index} marginY={2} paddingX={6}>
                  <CfButton
                    internalTitle={item.internalTitle}
                    buttonStyle={item.buttonStyle}
                    title={item.title}
                    link={item.link}
                    rightIcon={item.rightIcon}
                    fullWidthMobile
                    __typename={item.__typename}
                    id={item?.sys?.id || ""}
                    preview={item.preview}
                    lang={lang}
                  />
                </Box>
              );
            }
            break;
          default:
            return null;
        }
      })}
    </Box>
  );
};
