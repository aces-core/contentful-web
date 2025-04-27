"use client";

import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent } from "@aces/types";
import { Box, Divider, List } from "@aces/ui";
import { CfButton, CfButtonProps } from "@aces/cf";

import {
  CfMenuItemType,
  isCfButton,
  isCfMenuItem,
  MobileMenuItem,
  mobileMenuPaddingStyle,
} from "../menus";
import { typography } from "@aces/theme";

interface SecondaryNavigationMobileProps
  extends Pick<CfBaseComponent, "id" | "lang"> {
  data: (CfMenuItemType | CfButtonProps)[];
}

export const SecondaryNavigationMobile = ({
  data,
  id,
  lang,
}: SecondaryNavigationMobileProps) => {
  return (
    <List
      {...ContentfulLivePreview.getProps({
        entryId: id,
        fieldId: "secondaryNavigation",
        locale: lang,
      })}
    >
      <Divider margin={mobileMenuPaddingStyle} />

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
                  fontSize={typography.caption.fontSize}
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: ".1rem",
                  }}
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
    </List>
  );
};
