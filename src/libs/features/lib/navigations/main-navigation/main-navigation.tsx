import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent } from "@maverick/types";
import { FlexBox, MenuItem } from "@maverick/ui";
import { CfButton, CfButtonProps } from "@maverick/cf";

import {
  CfDropDownMenuType,
  CfMenuItemType,
  DropdownMenu,
  isCfButton,
  isCfDropDownMenu,
  isCfMenuItem,
  MenuLink,
} from "../menus";

interface MainNavigationProps extends Pick<CfBaseComponent, "id" | "lang"> {
  data: (CfMenuItemType | CfDropDownMenuType | CfButtonProps)[];
}

export const MainNavigation = ({ data, id, lang }: MainNavigationProps) => {
  return (
    <FlexBox
      alignItems="center"
      {...ContentfulLivePreview.getProps({
        entryId: id,
        fieldId: "mainNavigation",
        locale: lang,
      })}
    >
      {data.map((item, index) => {
        if (!item.__typename) return null;

        switch (item.__typename) {
          case "MenuItem":
            if (isCfMenuItem(item)) {
              return (
                <MenuItem key={index} resize noPadding>
                  <MenuLink
                    link={item.link}
                    title={item.title}
                    externalLinkIcon={item.externalLinkIcon}
                    lang={lang}
                    style={{
                      display: "block",
                      padding: "1.5rem .75rem",
                    }}
                  />
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
