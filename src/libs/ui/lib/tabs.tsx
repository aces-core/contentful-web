"use client";

import MuiTab, { TabProps as MuiTabProps } from "@mui/material/Tab";
import MuiTabs, { TabsProps as MuiTabsProps } from "@mui/material/Tabs";

import { Box, BoxProps } from "@aces/ui";

export function Tabs({
  value,
  variant = "fullWidth",
  onChange,
  children,
}: MuiTabsProps) {
  return (
    <MuiTabs value={value} variant={variant} onChange={onChange}>
      {children}
    </MuiTabs>
  );
}

function Tab({ label, children, ...props }: MuiTabProps) {
  return (
    <MuiTab label={label} {...props}>
      {children}
    </MuiTab>
  );
}

TabPanel.displayName = "Tab";
Tabs.Tab = Tab;

interface TabPanelProps extends Pick<BoxProps, "style" | "children"> {
  index: number;
  value: number | null;
}

function TabPanel({ index, value, style, children }: TabPanelProps) {
  return (
    <Box role="tabpanel" hidden={value !== index}>
      {value === index && <Box style={style}>{children}</Box>}
    </Box>
  );
}

TabPanel.displayName = "TabPanel";
Tabs.TabPanel = TabPanel;
