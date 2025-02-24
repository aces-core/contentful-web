import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent } from "@maverick/types";
import { typography } from "@maverick/theme";
import { Box, FlexBox } from "@maverick/ui";

import { CfMenuItemType, isCfMenuItem, MenuLink } from "../menus";

interface PrivacyNavigationProps extends Pick<CfBaseComponent, "id" | "lang"> {
  data: CfMenuItemType[];
}

export const PrivacyNavigation = ({
  data,
  id,
  lang,
}: PrivacyNavigationProps) => {
  return (
    <FlexBox
      alignItems="center"
      justifyContent={{ xs: "center", md: "flex-end" }}
      {...ContentfulLivePreview.getProps({
        entryId: id,
        fieldId: "privacyNavigation",
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
                <Box
                  key={index}
                  style={{
                    marginLeft: index !== 0 ? 8 : 0,
                  }}
                >
                  <MenuLink
                    link={item.link}
                    title={item.title}
                    externalLinkIcon={item.externalLinkIcon}
                    lang={lang}
                    fontSize={typography.caption.fontSize}
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
  );
};
