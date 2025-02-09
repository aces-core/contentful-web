import { CfBaseComponent } from "@maverick/types";
import { typography } from "@maverick/theme";
import { Box, FlexBox } from "@maverick/ui";
import { CfLink } from "@maverick/cf";

import { CfMenuItemType, isCfMenuItem } from "../menus";

interface PrivacyNavigationProps extends Pick<CfBaseComponent, "lang"> {
  data: CfMenuItemType[];
}

export const PrivacyNavigation = ({ data, lang }: PrivacyNavigationProps) => {
  return (
    <FlexBox
      alignItems="center"
      justifyContent={{ xs: "center", md: "flex-end" }}
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
                <Box
                  key={index}
                  style={{
                    marginLeft: index !== 0 ? 8 : 0,
                  }}
                >
                  <CfLink
                    key={index}
                    linkType={item.link.linkType}
                    target={item.link.target}
                    pageLink={item.link.pageLink}
                    customLink={item.link.customLink}
                    lang={lang}
                    style={{
                      fontSize: typography.caption.fontSize,
                    }}
                  >
                    {item.title}
                  </CfLink>
                </Box>
              );
            }
            break;
          default:
            return null;
        }
      })}
    </FlexBox>
  );
};
