import React from "react";
import MuiInputAdornment from "@mui/material/InputAdornment";
import MuiListItemText from "@mui/material/ListItemText";
import MuiMenuItem from "@mui/material/MenuItem";
import MuiSelect, { SelectProps as MuiSelectProps } from "@mui/material/Select";

import { CustomCssProps, SelectOption } from "@maverick/types";
import { Checkbox, FormControl, InputLabel } from "@maverick/ui";

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
  > {
  options: SelectOption[];
  itemsMaxHeight?: number | "auto";
  showCheckbox?: boolean;
  prependIcon?: React.ReactNode;
  style?: CustomCssProps;
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
      style={style}
    >
      {label && <InputLabel id={`${label}-select-label`}>{label}</InputLabel>}
      <MuiSelect
        id={id}
        labelId={`${label}-select-label`}
        label={label}
        value={selectedValue}
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
        renderValue={renderValue}
        onChange={onChange}
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
            <MuiListItemText
              primary={option.label}
              sx={{
                "&& .MuiListItemText-primary": {
                  fontSize: "body2.fontSize",
                },
              }}
            />
          </MuiMenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
