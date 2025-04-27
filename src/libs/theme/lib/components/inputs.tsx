import { Components, Theme } from "@mui/material";

import { Icon } from "@aces/ui";

export const inputsCustomizations: Components<Theme> = {
  MuiCheckbox: {
    // BUGFIX: Causing an unknown error at the moment

    // defaultProps: {
    //   disableRipple: true,
    //   icon: (
    //     <Icon icon="CheckBoxOutlineBlank" style={{ color: "transparent" }} />
    //   ),
    //   checkedIcon: <Icon icon="Check" />,
    //   indeterminateIcon: <Icon icon="Remove" />,
    // },
    styleOverrides: {
      root: ({ theme }) => ({
        padding: 0,
        backgroundImage: "none",
        borderRadius: "0.125rem",
        border: "1px solid",
        borderColor: theme.palette.border.input,
        boxShadow:
          "0 1px 2px rgba(0, 0, 0, 0.05), inset 1px 1px 3px 1px rgba(0, 0, 0, 0.05)",
        transition: "border-color 150ms ease-in-out",
        "&:hover": {
          borderColor: theme.palette.primary.main,
        },
        "&.Mui-checked": {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.common.white,
          borderColor: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
        },
        "&.Mui-focusVisible": {
          outline: `1px auto ${theme.palette.primary.main}`,
          outlineOffset: 4,
        },
        variants: [
          {
            props: { size: "small" },
            style: {
              height: 14,
              width: 14,
              margin: "0.125rem 0.375rem",
              "& .MuiSvgIcon-root": {
                width: 12,
                height: 12,
              },
            },
          },
          {
            props: { size: "medium" },
            style: {
              height: 16,
              width: 16,
              margin: "0.25rem 7px",
              "& .MuiSvgIcon-root": {
                width: 14,
                height: 14,
              },
            },
          },
          {
            props: { size: "large" },
            style: {
              height: 20,
              width: 20,
              margin: "0.375rem 0.5rem",
              "& .MuiSvgIcon-root": {
                width: 16,
                height: 16,
              },
            },
          },
        ],
      }),
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.text.primary,
        "&.Mui-focused": {
          color: "inherit",
        },
        variants: [
          {
            props: { size: "small" },
            style: {
              fontSize: theme.typography.body2.fontSize,
            },
          },
        ],
      }),
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.text.primary,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        "&.Mui-focused": {
          color: theme.palette.text.primary,
        },
      }),
      focused: ({ theme }) => ({
        color: theme.palette.text.primary,
      }),
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        margin: 0,
        "&:hover .MuiCheckbox-root": {
          borderColor: theme.palette.primary.main,
        },
        variants: [
          {
            props: { size: "small" },
            style: {
              marginLeft: "-0.375rem",
            },
          },
          {
            props: { size: "medium" },
            style: {
              marginLeft: "-7px",
            },
          },
          {
            props: { size: "large" },
            style: {
              marginLeft: "-0.5rem",
            },
          },
        ],
      }),
      label: ({ theme }) => ({
        marginTop: "0.125rem",
        fontSize: theme.typography.body2.fontSize,
        "&.Mui-disabled": {
          color: theme.palette.text.primary,
        },
      }),
    },
  },
};
