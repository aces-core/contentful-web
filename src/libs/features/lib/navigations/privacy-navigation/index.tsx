import { CfBaseComponent } from "@maverick/types";
import { FlexBox } from "@maverick/ui";
import { CfLink } from "@maverick/cf";

import { CfMenuItemType, isCfMenuItem } from "../menus";
import { typography } from "@maverick/theme";

interface PrivacyNavigationProps extends Pick<CfBaseComponent, "lang"> {
  data: CfMenuItemType[];
}

export const PrivacyNavigation = ({ data, lang }: PrivacyNavigationProps) => {
  return (
    <FlexBox alignItems="center" justifyContent="flex-end">
      {data.map((item, index) => {
        const typename = item.__typename;

        if (!typename) {
          return null;
        }

        switch (typename) {
          case "MenuItem":
            if (isCfMenuItem(item)) {
              return (
                <CfLink
                  key={index}
                  linkType={item.link.linkType}
                  target={item.link.target}
                  pageLink={item.link.pageLink}
                  customLink={item.link.customLink}
                  lang={lang}
                  style={{
                    display: "block",
                    marginLeft: "32px",
                    fontSize: typography.caption.fontSize,
                  }}
                >
                  {item.title}
                </CfLink>
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
