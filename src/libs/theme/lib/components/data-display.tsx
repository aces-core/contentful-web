import { Components, Theme } from "@mui/material";

const shapeStyles = [
  {
    props: {
      shape: "rectangular",
    },
    style: {
      borderRadius: 0,
    },
  },
  {
    props: {
      shape: "rounded",
    },
    style: {
      borderRadius: "0.125rem",
    },
  },
  {
    props: {
      shape: "circular",
    },
    style: {
      borderRadius: "9999px",
    },
  },
];

/* eslint-disable import/prefer-default-export */
export const dataDisplayCustomizations: Components<Theme> = {
  MuiChip: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 0,
        fontWeight: 600,
        variants: [
          ...shapeStyles,
          {
            props: { variant: "outlined", color: "primary" },
            style: {
              borderColor: theme.palette.primary.main,
            },
          },
          {
            props: {
              color: "light",
              variant: "filled",
            },
            style: {
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.common.white,
            },
          },
          {
            props: {
              color: "light",
              variant: "outlined",
            },
            style: {
              color: theme.palette.common.white,
              borderColor: theme.palette.common.white,
            },
          },
        ],
      }),
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: ({ theme }) => ({
        backgroundColor: theme.palette.common.black,
      }),
    },
  },
};
