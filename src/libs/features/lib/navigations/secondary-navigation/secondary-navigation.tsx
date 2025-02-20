import { CfBaseComponent } from "@maverick/types";
import { Container, FlexBox, MenuItem } from "@maverick/ui";
import { CfButton, CfButtonProps } from "@maverick/cf";

import { CfMenuItemType, isCfButton, isCfMenuItem, MenuLink } from "../menus";
import { palette, typography } from "@maverick/theme";

interface SecondaryNavigationProps extends Pick<CfBaseComponent, "lang"> {
  data: (CfMenuItemType | CfButtonProps)[];
  align?: "flex-start" | "center" | "flex-end";
}

export const SecondaryNavigation = ({
  data,
  align = "flex-end",
  lang,
}: SecondaryNavigationProps) => {
  return (
    <FlexBox
      style={{
        background: palette.primary.main,
        color: palette.common.white,
        position: "relative",
        zIndex: 1000,
      }}
    >
      <Container>
        <FlexBox justifyContent={align}>
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
                        fontSize={typography.body2.fontSize}
                        style={{
                          display: "block",
                          paddingTop: ".4rem",
                          paddingBottom: ".4rem",
                        }}
                      />
                    </MenuItem>
                  );
                }
                break;
              case "Button":
                if (isCfButton(item)) {
                  return (
                    <CfButton
                      key={index}
                      internalTitle={item.internalTitle}
                      buttonStyle={item.buttonStyle}
                      title={item.title}
                      link={item.link}
                      __typename={item.__typename}
                      id={item?.sys?.id || ""}
                      preview={item.preview}
                      lang={lang}
                    />
                  );
                }
                break;
              default:
                return null;
            }
          })}
        </FlexBox>
      </Container>
    </FlexBox>
  );
};
