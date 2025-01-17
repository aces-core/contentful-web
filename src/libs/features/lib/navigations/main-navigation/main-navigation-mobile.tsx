"use client";

import { Fragment, useState } from "react";

import {
  CfBaseComponent,
  CfHeaderNavigationCollectionItem,
} from "@maverick/types";
import {
  Drawer,
  Box,
  Text,
  List,
  ListItem,
  ListItemButton,
  IconButton,
  Icon,
  FlexBox,
  Collapse,
} from "@maverick/ui";
import { CfButton, CfLink } from "@maverick/cf";

import { SearchBar } from "../../search";

interface MainNavigationMobileProps extends Pick<CfBaseComponent, "lang"> {
  open: boolean;
  onClose: () => void;
  data: CfHeaderNavigationCollectionItem[];
}

export const MainNavigationMobile = ({
  open,
  onClose,
  data,
  lang,
}: MainNavigationMobileProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const paddingStyle = "1.6rem 1.6rem";

  const handleDrawerClose = () => {
    onClose();
    setDropdownOpen(false);
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={handleDrawerClose}
      minWidth={350}
    >
      <Box role="presentation">
        <List>
          <FlexBox justifyContent="flex-end" paddingX={6} paddingY={1}>
            <IconButton
              color="primary"
              size="large"
              onClick={handleDrawerClose}
            >
              <Icon icon="Close" />
            </IconButton>
          </FlexBox>
          {data.map((item, index) => {
            const typename = item.__typename;

            if (!typename) {
              return null;
            }

            switch (typename) {
              case "MenuItem":
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
                    }}
                  >
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={onClose}
                        style={{ padding: paddingStyle }}
                      >
                        <Text>{item.title}</Text>
                      </ListItemButton>
                    </ListItem>
                  </CfLink>
                );
              case "DropdownMenu":
                return (
                  <Fragment key={index}>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: paddingStyle,
                        }}
                      >
                        <Text>{item.title}</Text>
                        <Icon
                          icon={dropdownOpen ? "ArrowDropUp" : "ArrowDropDown"}
                        />
                      </ListItemButton>
                    </ListItem>
                    <Collapse in={dropdownOpen} timeout="auto" unmountOnExit>
                      <List>
                        {item.menuItemsCollection.items.map(
                          (menuItem, index) => (
                            <CfLink
                              key={index}
                              linkType={menuItem.link.linkType}
                              target={menuItem.link.target}
                              pageLink={menuItem.link.pageLink}
                              customLink={menuItem.link.customLink}
                              lang={lang}
                              style={{
                                display: "block",
                              }}
                            >
                              <ListItem disablePadding>
                                <ListItemButton
                                  style={{ padding: paddingStyle }}
                                >
                                  <Text>{menuItem.title}</Text>
                                </ListItemButton>
                              </ListItem>
                            </CfLink>
                          ),
                        )}
                      </List>
                    </Collapse>
                  </Fragment>
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
          <ListItem style={{ marginTop: 6, alignSelf: "flex-end" }}>
            <SearchBar query="q" onSearch={handleDrawerClose} lang={lang} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};
