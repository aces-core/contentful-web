import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent } from "@aces/types";
import { FlexBox, MenuItem } from "@aces/ui";
import { CfButton, CfButtonProps } from "@aces/cf";

import { CfMenuItemType, isCfButton, isCfMenuItem, MenuLink } from "../menus";
import { palette, typography } from "@aces/theme";
import { Box } from "@mui/material";

interface SecondaryNavigationProps
  extends Pick<CfBaseComponent, "id" | "lang"> {
  data: (CfMenuItemType | CfButtonProps)[];
  align?: "flex-start" | "center" | "flex-end";
}

export const SecondaryNavigation = ({
  data,
  align = "flex-end",
  id,
  lang,
}: SecondaryNavigationProps) => {
  return (
    <FlexBox
      justifyContent="flex-end"
      style={{
        borderBottom: `1px solid ${palette.border.light}`,
        position: "relative",
        width: "100%",
        zIndex: 1000,
      }}
    >
      <FlexBox
        justifyContent={align}
        {...ContentfulLivePreview.getProps({
          entryId: id,
          fieldId: "secondaryNavigation",
          locale: lang,
        })}
      >
        {data.map((item, index) => {
          if (!item.__typename) return null;

          switch (item.__typename) {
            case "MenuItem":
              if (isCfMenuItem(item)) {
                return (
                  <MenuItem key={index} noPadding>
                    <MenuLink
                      link={item.link}
                      title={item.title}
                      externalLinkIcon={item.externalLinkIcon}
                      lang={lang}
                      fontSize={typography.caption.fontSize}
                      style={{
                        display: "block",
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        textTransform: "uppercase",
                        letterSpacing: ".1rem",
                      }}
                    />
                  </MenuItem>
                );
              }
              break;
            case "Button":
              if (isCfButton(item)) {
                return (
                  <Box key={index} marginY={2} paddingX={2}>
                    <CfButton
                      internalTitle={item.internalTitle}
                      buttonStyle={item.buttonStyle}
                      title={item.title}
                      link={item.link}
                      rightIcon={item.rightIcon}
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
      </FlexBox>
    </FlexBox>
  );
};
