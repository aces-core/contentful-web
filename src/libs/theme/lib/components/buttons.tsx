import { alpha, Components, Theme } from "@mui/material";

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
        textTransform: "none",
        boxShadow: "none",
        whiteSpace: "nowrap",
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
              borderWidth: 1,
              borderStyle: "solid",
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
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              "&:hover": {
                color: theme.palette.primary.dark,
                borderColor: theme.palette.primary.dark,
              },
            },
          },
          {
            props: {
              color: "secondary",
              variant: "contained",
            },
            style: {
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.secondary.main,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: theme.palette.secondary.main,
              "&:hover": {
                backgroundColor: theme.palette.secondary.dark,
                borderColor: theme.palette.secondary.dark,
              },
            },
          },
          {
            props: {
              color: "secondary",
              variant: "outlined",
            },
            style: {
              color: theme.palette.secondary.main,
              borderColor: theme.palette.secondary.main,
              "&:hover": {
                color: theme.palette.secondary.dark,
                borderColor: theme.palette.secondary.dark,
              },
            },
          },
          {
            props: {
              color: "light",
              variant: "contained",
            },
            style: {
              color: theme.palette.common.black,
              backgroundColor: theme.palette.background.default,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: theme.palette.border.default,
              "&:hover": {
                backgroundColor: theme.palette.foreground.default,
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
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: theme.palette.border.default,
              "&:hover": {
                backgroundColor: theme.palette.foreground.default,
              },
            },
          },
          {
            props: {
              color: "gradient",
            },
            style: {
              color: theme.palette.common.white,
              background: theme.palette.gradient.primary,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: theme.palette.primary.main,
              "&:hover": {
                background: theme.palette.gradient.dark,
                borderColor: theme.palette.gradient.primary,
              },
            },
          },
          {
            props: {
              variant: "text",
            },
            style: {
              borderRadius: "0.125rem",
            },
          },
        ],
      }),
      sizeSmall: ({ theme }) => ({
        padding: "0.5rem 1.125rem",
        fontWeight: 700,
        fontSize: theme.typography.caption.fontSize,
      }),
      sizeMedium: ({ theme }) => ({
        padding: "0.5rem 1.25rem",
        fontSize: theme.typography.body1.fontSize,
      }),
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
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
              color: theme.palette.primary.contrastText,
              backgroundColor: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            },
          },
          {
            props: {
              color: "primary",
              variant: "outlined",
            },
            style: {
              color: theme.palette.primary.main,
              border: "1px solid",
              borderColor: theme.palette.primary.main,
              "&:hover": {
                color: theme.palette.primary.dark,
                borderColor: theme.palette.primary.dark,
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
              color: theme.palette.secondary.contrastText,
              backgroundColor: theme.palette.secondary.main,
              "&:hover": {
                backgroundColor: theme.palette.secondary.dark,
              },
            },
          },
          {
            props: {
              color: "secondary",
              variant: "outlined",
            },
            style: {
              color: theme.palette.secondary.main,
              border: "1px solid",
              borderColor: theme.palette.secondary.main,
              "&:hover": {
                color: theme.palette.secondary.dark,
                borderColor: theme.palette.secondary.dark,
              },
            },
          },
          {
            props: {
              color: "light",
              variant: "standard",
            },
            style: {
              color: theme.palette.common.black,
              "&:hover": {
                backgroundColor: alpha(theme.palette.border.default, 0.1),
              },
            },
          },
          {
            props: {
              color: "light",
              variant: "contained",
            },
            style: {
              color: theme.palette.common.black,
              backgroundColor: theme.palette.background.default,
              "&:hover": {
                backgroundColor: theme.palette.foreground.default,
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
              borderColor: theme.palette.border.default,
              "&:hover": {
                backgroundColor: theme.palette.foreground.default,
              },
            },
          },
        ],
      }),
    },
  },
};
