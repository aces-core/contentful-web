import { CfBaseComponent } from "@maverick/types";
import { FlexBox, MenuItem } from "@maverick/ui";
import { CfButton, CfButtonProps, CfLink } from "@maverick/cf";

import {
  CfDropDownMenuType,
  CfMenuItemType,
  DropdownMenu,
  isCfButton,
  isCfDropDownMenu,
  isCfMenuItem,
} from "../menus";

interface MainNavigationProps extends Pick<CfBaseComponent, "lang"> {
  data: (CfMenuItemType | CfDropDownMenuType | CfButtonProps)[];
}

export const MainNavigation = ({ data, lang }: MainNavigationProps) => {
  return (
    <FlexBox alignItems="center">
      {data.map((item, index) => {
        if (!item.__typename) return null;

        switch (item.__typename) {
          case "MenuItem":
            if (isCfMenuItem(item)) {
              return (
                <MenuItem key={index} resize noPadding>
                  <CfLink
                    linkType={item.link.linkType}
                    target={item.link.target}
                    pageLink={item.link.pageLink}
                    customLink={item.link.customLink}
                    lang={lang}
                    style={{
                      display: "block",
                      padding: "1.75rem .75rem",
                    }}
                  >
                    {item.title}
                  </CfLink>
                </MenuItem>
              );
            }
            break;
          case "DropdownMenu":
            if (isCfDropDownMenu(item)) {
              return (
                <DropdownMenu
                  key={index}
                  title={item.title}
                  menu={item.menuItemsCollection.items}
                  lang={lang}
                />
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
  );
};
