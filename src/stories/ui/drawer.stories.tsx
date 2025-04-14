import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import {
  Box,
  Text,
  List,
  ListItem,
  ListItemButton,
  Divider,
  Button,
  Drawer as DrawerUI,
} from "@aces/ui";

const meta = {
  title: "UI/Drawer",
  component: DrawerUI,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    anchor: {
      control: { type: "select" },
      options: ["top", "left", "right", "bottom"],
    },
    minWidth: {
      control: { type: "number" },
    },
    enterSpeed: {
      control: { type: "number" },
    },
    exitSpeed: {
      control: { type: "number" },
    },
  },
  args: {
    anchor: "left",
    minWidth: 250,
    enterSpeed: 250,
    exitSpeed: 250,
  },
} satisfies Meta<typeof DrawerUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Drawer: Story = {
  render: ({ anchor, minWidth, enterSpeed, exitSpeed }) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };

    return (
      <>
        <Button onClick={toggleDrawer(true)}>Open drawer</Button>
        <DrawerUI
          anchor={anchor}
          minWidth={minWidth}
          enterSpeed={enterSpeed}
          exitSpeed={exitSpeed}
          open={open}
          onClose={toggleDrawer(false)}
        >
          <Box role="presentation" onClick={toggleDrawer(false)}>
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <Text>{text}</Text>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <Text>{text}</Text>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </DrawerUI>
      </>
    );
  },
};
