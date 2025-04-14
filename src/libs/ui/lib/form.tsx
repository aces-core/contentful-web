import MuiFormControl, {
  FormControlProps as MuiFormControlProps,
} from "@mui/material/FormControl";
import MuiFormControlLabel, {
  FormControlLabelProps as MuiFormControlLabelProps,
} from "@mui/material/FormControlLabel";
import MuiFormGroup, {
  FormGroupProps as MuiFormGroupProps,
} from "@mui/material/FormGroup";
import MuiFormLabel, {
  FormLabelProps as MuiFormLabelProps,
} from "@mui/material/FormLabel";

import { CustomCssProps } from "@aces/types";

interface FormGroupProps extends Pick<MuiFormGroupProps, "children"> {
  style?: CustomCssProps;
}

export function FormGroup({ style, children }: FormGroupProps) {
  return <MuiFormGroup sx={{ ...style }}>{children}</MuiFormGroup>;
}

interface FormLabelProps extends Pick<MuiFormLabelProps, "id" | "children"> {
  style?: CustomCssProps;
}

export function FormLabel({ id, style, children }: FormLabelProps) {
  return (
    <MuiFormLabel id={id} sx={style}>
      {children}
    </MuiFormLabel>
  );
}

interface FormControlProps
  extends Pick<
    MuiFormControlProps,
    "variant" | "size" | "fullWidth" | "children"
  > {
  style?: CustomCssProps;
}

export function FormControl({
  variant,
  size,
  fullWidth,
  style,
  children,
}: FormControlProps) {
  return (
    <MuiFormControl
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      sx={style}
    >
      {children}
    </MuiFormControl>
  );
}

interface FormControlLabelProps
  extends Pick<
    MuiFormControlLabelProps,
    "value" | "control" | "label" | "size" | "checked" | "disabled" | "onChange"
  > {
  style?: CustomCssProps;
}

export function FormControlLabel({
  label,
  value,
  size = "medium",
  control,
  checked,
  disabled,
  onChange,
  style,
}: FormControlLabelProps) {
  return (
    <MuiFormControlLabel
      label={label}
      value={value}
      control={control}
      size={size}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      sx={style}
    />
  );
}
