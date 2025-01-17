import React from "react";
import MuiInputAdornment from "@mui/material/InputAdornment";
import MuiListItemText from "@mui/material/ListItemText";
import MuiMenuItem from "@mui/material/MenuItem";
import MuiSelect, { SelectProps as MuiSelectProps } from "@mui/material/Select";
import { SelectChangeEvent as MuiSelectChangeEvent } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { CustomCssProps, SelectOption } from "@maverick/types";
import { Checkbox, FormControl, InputLabel } from "@maverick/ui";

export type SelectChangeEvent = MuiSelectChangeEvent;

interface SelectProps
  extends Pick<
    MuiSelectProps,
    | "id"
    | "label"
    | "value"
    | "fullWidth"
    | "multiple"
    | "size"
    | "variant"
    | "renderValue"
    | "onChange"
    | "defaultValue"
  > {
  options: SelectOption[];
  itemsMaxHeight?: number | "auto";
  showCheckbox?: boolean;
  prependIcon?: React.ReactNode;
  style?: CustomCssProps;
  onClear?: () => void; // Added onClear prop
}

export const Select: React.FC<SelectProps> = ({
  id,
  label,
  value,
  options,
  fullWidth = true,
  multiple = false,
  variant = "outlined",
  itemsMaxHeight = "auto",
  size,
  showCheckbox = false,
  prependIcon,
  style,
  renderValue,
  onChange,
  defaultValue,
  onClear,
}) => {
  const selectedValue = value as string | string[];

  const MenuProps = {
    autoFocus: false,
    PaperProps: {
      elevation: 2,
      style: {
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
        maxHeight: itemsMaxHeight,
        borderRadius: "0.5rem",
      },
    },
  };

  return (
    <FormControl
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      style={{
        minWidth: "200px",
        ...style,
      }}
    >
      {label && <InputLabel id={`${label}-select-label`}>{label}</InputLabel>}
      <MuiSelect
        id={id}
        labelId={`${label}-select-label`}
        label={label}
        value={selectedValue}
        defaultValue={defaultValue}
        multiple={multiple}
        size={size}
        MenuProps={MenuProps}
        startAdornment={
          prependIcon && (
            <MuiInputAdornment position="start">
              {prependIcon}
            </MuiInputAdornment>
          )
        }
        endAdornment={
          onClear &&
          selectedValue &&
          selectedValue.length > 0 && (
            <MuiInputAdornment position="end">
              <IconButton
                size="small"
                aria-label="clear selection"
                onClick={(e) => {
                  e.stopPropagation();
                  onClear();
                }}
                edge="end"
              >
                <CloseIcon />
              </IconButton>
            </MuiInputAdornment>
          )
        }
        renderValue={renderValue}
        onChange={onChange}
        sx={{
          minHeight: "65px",
          ".MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            minHeight: "65px",
            paddingTop: 0,
            paddingBottom: 0,
          },
          ".MuiInputBase-root": {
            minHeight: "65px",
          },
          paddingRight:
            onClear && selectedValue && selectedValue.length > 0
              ? "2.5rem"
              : undefined,
        }}
      >
        {options.map((option: SelectOption) => (
          <MuiMenuItem
            key={option.value}
            value={option.value}
            sx={{
              paddingLeft: "0.625rem",
              paddingRight: "0.625rem",
            }}
          >
            {showCheckbox && (
              <Checkbox
                checked={selectedValue.includes(option.value)}
                size={size}
              />
            )}
            <MuiListItemText primary={option.label} />
          </MuiMenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
