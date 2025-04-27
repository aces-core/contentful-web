"use client";

import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent } from "@aces/types";
import { Box } from "@aces/ui";
import { CfButton, CfButtonProps } from "@aces/cf";

import {
  CfDropDownMenuType,
  CfMenuItemType,
  DropDownMenuMobile,
  isCfButton,
  isCfDropDownMenu,
  isCfMenuItem,
  MobileMenuItem,
} from "../menus";

export interface MainNavigationMobileDefaultProps
  extends Pick<CfBaseComponent, "id" | "lang"> {
  data: (CfMenuItemType | CfDropDownMenuType | CfButtonProps)[];
}

export const MainNavigationMobileDefault = ({
  data,
  id,
  lang,
}: MainNavigationMobileDefaultProps) => {
  return (
    <Box
      paddingTop={3}
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
              return <DropDownMenuMobile key={index} item={item} lang={lang} />;
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
