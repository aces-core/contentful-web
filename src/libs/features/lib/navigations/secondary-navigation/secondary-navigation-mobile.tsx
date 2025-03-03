"use client";

import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent } from "@maverick/types";
import { Box, List } from "@maverick/ui";
import { CfButton, CfButtonProps } from "@maverick/cf";

import {
  CfMenuItemType,
  isCfButton,
  isCfMenuItem,
  MobileMenuItem,
} from "../menus";

interface SecondaryNavigationMobileProps
  extends Pick<CfBaseComponent, "id" | "lang"> {
  data: (CfMenuItemType | CfButtonProps)[];
}

export const SecondaryNavigationMobile = ({
  data,
  id,
  lang,
}: SecondaryNavigationMobileProps) => {
  const paddingStyle = "1.6rem 1.6rem";

  return (
    <List
      {...ContentfulLivePreview.getProps({
        entryId: id,
        fieldId: "secondaryNavigation",
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
              return (
                <MobileMenuItem
                  key={index}
                  item={item}
                  lang={lang}
                  paddingStyle={paddingStyle}
                />
              );
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
    </List>
  );
};
