import { alpha, Components, darken, Theme } from "@mui/material";

import { headerFont } from "../config";

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
      borderRadius: "8px",
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

export const buttonsCustomizations: Components<Theme> = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
      disableTouchRipple: true,
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontFamily: headerFont.style.fontFamily,
        boxShadow: "none",
        borderWidth: 2,
        borderStyle: "solid",
        whiteSpace: "nowrap",
        textTransform: "none",
        lineHeight: 1,
        "&:hover": {
          boxShadow: "none",
        },
        "&:focus-visible": {
          outline: `1px auto ${theme.palette.primary.main}`,
          outlineOffset: 4,
          boxShadow: "none",
        },
        variants: [
          ...shapeStyles,
          {
            props: {
              color: "primary",
              variant: "contained",
            },
            style: {
              color: theme.palette.primary.contrastText,
              backgroundColor: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
                borderColor: theme.palette.primary.dark,
              },
            },
          },
          {
            props: {
              color: "primary",
              variant: "outlined",
            },
            style: {
              color: theme.palette.common.black,
              backgroundColor: "transparent",
              borderColor: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.palette.primary.light,
              },
            },
          },
          {
            props: {
              color: "secondary",
              variant: "contained",
            },
            style: {
              color: theme.palette.secondary.main,
              backgroundColor: theme.palette.common.white,
              borderColor: theme.palette.common.white,
              "&:hover": {
                backgroundColor: theme.palette.grey[100],
                borderColor: theme.palette.grey[100],
              },
            },
          },
          {
            props: {
              color: "secondary",
              variant: "outlined",
            },
            style: {
              color: theme.palette.common.white,
              backgroundColor: "transparent",
              borderColor: theme.palette.common.white,
              "&:hover": {
                color: theme.palette.grey[100],
                backgroundColor: "transparent",
                borderColor: theme.palette.grey[100],
              },
            },
          },
          {
            props: {
              color: "light",
              variant: "contained",
            },
            style: {
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.primary.light,
              borderColor: theme.palette.primary.light,
              "&:hover": {
                color: theme.palette.primary.dark,
                backgroundColor: theme.palette.primary.light,
              },
            },
          },
          {
            props: {
              color: "light",
              variant: "outlined",
            },
            style: {
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.common.white,
              borderColor: theme.palette.primary.light,
              "&:hover": {
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.common.white,
                borderColor: theme.palette.primary.main,
              },
            },
          },
          {
            props: {
              color: "primary",
              variant: "text",
            },
            style: {
              color: theme.palette.primary.main,
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "4px",
              padding: "2px 12px !important",
              "&:hover": {
                color: theme.palette.primary.main,
                backgroundColor: `rgba(0,0,0, .025)`,
              },
            },
          },
          {
            props: {
              color: "secondary",
              variant: "text",
            },
            style: {
              color: theme.palette.common.black,
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "4px",
              padding: "2px 12px !important",
              "&:hover": {
                color: theme.palette.common.black,
                backgroundColor: alpha(theme.palette.common.black, 0.025),
              },
            },
          },
          {
            props: {
              color: "light",
              variant: "text",
            },
            style: {
              color: theme.palette.common.white,
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "4px",
              padding: "2px 12px !important",
              "&:hover": {
                color: theme.palette.common.white,
                backgroundColor: alpha(theme.palette.common.white, 0.025),
              },
            },
          },
        ],
      }),
      sizeSmall: ({ theme }) => ({
        padding: "20px 24px",
        fontSize: theme.typography.body1.fontSize,
      }),
      sizeMedium: ({ theme }) => ({
        padding: "24px 32px",
        fontSize: theme.typography.body2.fontSize,
      }),
      sizeLarge: ({ theme }) => ({
        padding: "28px 40px",
        fontSize: theme.typography.body2.fontSize,
      }),
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: "12px",
        variants: [
          ...shapeStyles,
          {
            props: {
              color: "primary",
              variant: "standard",
            },
            style: {
              color: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
              },
            },
          },
          {
            props: {
              color: "primary",
              variant: "contained",
            },
            style: {
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.primary.light,
              "&:hover": {
                backgroundColor: darken(theme.palette.primary.light, 0.08),
              },
            },
          },
          {
            props: {
              color: "primary",
              variant: "outlined",
            },
            style: {
              color: theme.palette.common.black,
              border: "2px solid",
              borderColor: theme.palette.primary.main,
              backgroundColor: theme.palette.common.white,
              "&:hover": {
                backgroundColor: theme.palette.primary.light,
              },
            },
          },
          {
            props: {
              color: "secondary",
              variant: "standard",
            },
            style: {
              color: theme.palette.secondary.main,
              "&:hover": {
                backgroundColor: alpha(theme.palette.secondary.main, 0.1),
              },
            },
          },
          {
            props: {
              color: "secondary",
              variant: "contained",
            },
            style: {
              color: theme.palette.secondary.main,
              backgroundColor: theme.palette.grey[100],
              "&:hover": {
                backgroundColor: theme.palette.grey[200],
              },
            },
          },
          {
            props: {
              color: "secondary",
              variant: "outlined",
            },
            style: {
              color: theme.palette.common.black,
              border: "2px solid",
              borderColor: theme.palette.secondary.main,
              backgroundColor: theme.palette.common.white,
              "&:hover": {
                backgroundColor: theme.palette.grey[100],
              },
            },
          },
          {
            props: {
              color: "light",
              variant: "standard",
            },
            style: {
              color: theme.palette.common.white,
              "&:hover": {
                backgroundColor: alpha(theme.palette.common.black, 0.08),
              },
            },
          },
          {
            props: {
              color: "light",
              variant: "contained",
            },
            style: {
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.common.white,
              "&:hover": {
                backgroundColor: theme.palette.grey[100],
              },
            },
          },
          {
            props: {
              color: "light",
              variant: "outlined",
            },
            style: {
              color: theme.palette.common.black,
              border: "1px solid",
              borderColor: theme.palette.grey[300],
              "&:hover": {
                backgroundColor: theme.palette.grey[100],
              },
            },
          },
        ],
      }),
      sizeSmall: () => ({
        padding: "8px",
      }),
      sizeMedium: () => ({
        padding: "12px",
      }),
      sizeLarge: () => ({
        padding: "26px",
      }),
    },
  },
};
