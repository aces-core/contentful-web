import { Components, Theme } from "@mui/material";

/* eslint-disable import/prefer-default-export */
export const surfacesCustomizations: Components<Theme> = {
  MuiAccordion: {
    defaultProps: {
      disableGutters: true,
      elevation: 0,
    },
    styleOverrides: {
      root: {
        backgroundColor: "transparent",
        boxShadow: "none",
        margin: 0,
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      expandIconWrapper: {
        color: "inherit",
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      elevation1: {
        boxShadow: "0px 2px 8px 0px rgba(98, 122, 153, 0.16)",
      },
      elevation2: {
        boxShadow: "0px 1px 12px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        boxShadow: "0px 2px 8px 0px rgba(98, 122, 153, 0.16)",
      },
    },
  },
};
