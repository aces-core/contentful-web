import React from "react";
import MuiAccordion, {
  AccordionProps as MuiAccordionProps,
} from "@mui/material/Accordion";
import MuiAccordionDetails, {
  AccordionDetailsProps as MuiAccordionDetailsProps,
} from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  AccordionSummaryProps as MuiAccordionSummaryProps,
} from "@mui/material/AccordionSummary";

import { CustomCssProps } from "@maverick/types";
import { Box, Icon, Text } from "@maverick/ui";

interface AccordionProps {
  style?: CustomCssProps;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({
  style,
  children,
  ...props
}) => {
  return (
    <Box style={style} {...props}>
      {children}
    </Box>
  );
};

interface AccordionItemProps extends Pick<MuiAccordionProps, "children"> {
  style?: CustomCssProps;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  style,
  children,
  ...props
}) => {
  return (
    <MuiAccordion sx={style} {...props}>
      {children}
    </MuiAccordion>
  );
};

interface AccordionItemTriggerProps
  extends Pick<MuiAccordionSummaryProps, "children"> {
  expandIconPosition?: "start" | "end";
  disableGutters?: boolean;
  style?: CustomCssProps;
}

export const AccordionItemTrigger: React.FC<AccordionItemTriggerProps> = ({
  expandIconPosition = "end",
  disableGutters = false,
  style,
  children,
  ...props
}) => {
  return (
    <MuiAccordionSummary
      expandIcon={<Icon icon="ExpandMore" color="inherit" />}
      sx={{
        ...(disableGutters && {
          paddingLeft: 0,
          paddingRight: 0,
        }),
        ...(expandIconPosition === "start" && {
          gap: 4,
          "& .MuiAccordionSummary-expandIconWrapper": {
            order: -1,
          },
        }),
        ...style,
      }}
      {...props}
    >
      <Text.SubtitleSmall component="p">{children}</Text.SubtitleSmall>
    </MuiAccordionSummary>
  );
};

interface AccordionItemContentProps
  extends Pick<MuiAccordionDetailsProps, "children"> {
  style?: CustomCssProps;
}

export const AccordionItemContent: React.FC<AccordionItemContentProps> = ({
  style,
  children,
  ...props
}) => {
  return (
    <MuiAccordionDetails sx={style} {...props}>
      {children}
    </MuiAccordionDetails>
  );
};
