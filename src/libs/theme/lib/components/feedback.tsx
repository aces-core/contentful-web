import { alpha, Components, Theme } from "@mui/material";

/* eslint-disable import/prefer-default-export */
export const feedbackCustomizations: Components<Theme> = {
  MuiBackdrop: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: alpha(theme.palette.common.black, 0.3),
        variants: [
          {
            props: { mode: "light" },
            style: {
              backgroundColor: alpha(theme.palette.common.white, 0.3),
              backdropFilter: "blur(20px)",
            },
          },
        ],
      }),
      invisible: {
        backgroundColor: "transparent",
      },
    },
  },
  MuiSkeleton: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.grey[200],
      }),
    },
  },
};
