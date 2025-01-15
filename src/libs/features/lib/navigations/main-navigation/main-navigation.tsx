import {
  CfBaseComponent,
  CfHeaderNavigationCollectionItem,
} from "@maverick/types";
import { FlexBox, MenuItem } from "@maverick/ui";
import { CfButton, CfDropdownMenu, CfLink } from "@maverick/cf";

interface MainNavigationProps extends Pick<CfBaseComponent, "lang"> {
  data: CfHeaderNavigationCollectionItem[];
}

export const MainNavigation = ({ data, lang }: MainNavigationProps) => {
  return (
    <FlexBox alignItems="center">
      {data.map((item, index) => {
        const typename = item.__typename;

        if (!typename) {
          return null;
        }

        switch (typename) {
          case "MenuItem":
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
          case "DropdownMenu":
            return (
              <CfDropdownMenu
                key={index}
                title={item.title}
                menu={item.menuItemsCollection.items}
                lang={lang}
              />
            );
          case "Button":
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
          default:
            return null;
        }
      })}
    </FlexBox>
  );
};
