import MuiTabs, { TabsProps as MuiTabsProps } from "@mui/material/Tabs";
import MuiTab, { TabProps as MuiTabProps } from "@mui/material/Tab";

import { CustomCssProps, ResponsiveSpacing } from "@aces/types";
import { palette } from "@aces/theme";
import { Box, BoxProps } from "@aces/ui";

export interface TabsProps
  extends Pick<MuiTabsProps, "value" | "variant" | "onChange" | "children"> {
  showBorder?: boolean;
  marginY?: ResponsiveSpacing;
  marginX?: ResponsiveSpacing;
  marginTop?: ResponsiveSpacing;
  marginBottom?: ResponsiveSpacing;
  marginRight?: ResponsiveSpacing;
  marginLeft?: ResponsiveSpacing;
  style?: CustomCssProps;
}

export function Tabs({
  value,
  variant = "standard",
  onChange,
  children,
  showBorder,
  marginY,
  marginX,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  style,
}: TabsProps) {
  return (
    <MuiTabs
      value={value}
      variant={variant}
      onChange={onChange}
      sx={{
        marginX: marginX,
        marginY: marginY,
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginRight: marginRight,
        marginLeft: marginLeft,
        position: "relative",
        "&:before": showBorder
          ? {
              background: palette.border.light,
              bottom: 0,
              content: '""',
              position: "absolute",
              height: "2px",
              width: "100%",
            }
          : {},
        ...style,
      }}
    >
      {children}
    </MuiTabs>
  );
}

export function Tab({ label, value, children, style, ...props }: MuiTabProps) {
  return (
    <MuiTab label={label} value={value} sx={style} {...props}>
      {children}
    </MuiTab>
  );
}

interface TabPanelProps extends Pick<BoxProps, "style" | "children"> {
  index: number;
  value: number | null;
}

export function TabPanel({ index, value, style, children }: TabPanelProps) {
  return (
    <Box role="tabpanel" hidden={value !== index}>
      {value === index && <Box style={style}>{children}</Box>}
    </Box>
  );
}
