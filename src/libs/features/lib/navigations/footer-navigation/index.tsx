import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent } from "@aces/types";
import { Box, FlexBox } from "@aces/ui";

import { CfMenuItemType, isCfMenuItem, MenuLink } from "../menus";

interface FooterNavigationProps extends Pick<CfBaseComponent, "id" | "lang"> {
  data: CfMenuItemType[];
}

export const FooterNavigation = ({ data, id, lang }: FooterNavigationProps) => {
  return (
    <FlexBox
      alignItems="center"
      justifyContent={{ xs: "center", md: "flex-end" }}
      flexDirection={{ xs: "column", md: "row" }}
      {...ContentfulLivePreview.getProps({
        entryId: id,
        fieldId: "footerNavigation",
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
                    marginTop: { xs: index !== 0 ? 4 : 0, md: 0 },
                    marginLeft: { xs: 0, md: index !== 0 ? 8 : 0 },
                  }}
                >
                  <MenuLink
                    link={item.link}
                    title={item.title}
                    externalLinkIcon={item.externalLinkIcon}
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
  );
};
