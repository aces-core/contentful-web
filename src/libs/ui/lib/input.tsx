import MuiInputLabel, {
  InputLabelProps as MuiInputLabelProps,
} from "@mui/material/InputLabel";
import MuiInputAdornment, {
  InputAdornmentProps as MuiInputAdornmentProps,
} from "@mui/material/InputAdornment";
import MuiInput, { InputProps as MuiInputProps } from "@mui/material/Input";
import MuiOutlinedInput, {
  OutlinedInputProps as MuiOutlinedInputProps,
} from "@mui/material/OutlinedInput";

import { CustomCssProps } from "@aces/types";
import { palette } from "@aces/theme";

interface InputProps
  extends Pick<
    MuiInputProps,
    | "color"
    | "defaultValue"
    | "disabled"
    | "endAdornment"
    | "error"
    | "fullWidth"
    | "id"
    | "inputComponent"
    | "inputProps"
    | "inputRef"
    | "multiline"
    | "name"
    | "placeholder"
    | "readOnly"
    | "required"
    | "rows"
    | "startAdornment"
    | "type"
    | "value"
    | "onChange"
    | "autoFocus"
  > {
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  style?: CustomCssProps;
}

export const Input = ({
  color,
  defaultValue,
  disabled,
  endAdornment,
  error,
  fullWidth,
  id,
  inputComponent,
  inputProps,
  inputRef,
  multiline,
  name,
  placeholder,
  readOnly,
  required,
  rows,
  startAdornment,
  type,
  value,
  onChange,
  onKeyDown,
  autoFocus,
  style,
}: InputProps) => {
  return (
    <MuiInput
      id={`${id}-input`}
      color={color}
      defaultValue={defaultValue}
      disabled={disabled}
      endAdornment={endAdornment}
      error={error}
      fullWidth={fullWidth}
      inputComponent={inputComponent}
      inputProps={inputProps}
      inputRef={inputRef}
      multiline={multiline}
      name={name}
      placeholder={placeholder}
      readOnly={readOnly}
      required={required}
      rows={rows}
      startAdornment={startAdornment}
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      autoFocus={autoFocus}
      sx={{
        ...style,
        "&.MuiInputBase-root": {
          backgroundColor: palette.common.white,
        },
      }}
    />
  );
};

interface OutlinedInputProps
  extends Pick<
    MuiOutlinedInputProps,
    | "color"
    | "defaultValue"
    | "disabled"
    | "endAdornment"
    | "error"
    | "fullWidth"
    | "id"
    | "inputComponent"
    | "inputProps"
    | "inputRef"
    | "multiline"
    | "name"
    | "label"
    | "placeholder"
    | "readOnly"
    | "required"
    | "rows"
    | "startAdornment"
    | "type"
    | "value"
    | "onChange"
    | "autoFocus"
  > {
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  style?: CustomCssProps;
}

export const OutlinedInput = ({
  color,
  defaultValue,
  disabled,
  endAdornment,
  error,
  fullWidth,
  id,
  inputComponent,
  inputProps,
  inputRef,
  multiline,
  name,
  label,
  placeholder,
  readOnly,
  required,
  rows,
  startAdornment,
  type,
  value,
  onChange,
  onKeyDown,
  autoFocus,
  style,
}: OutlinedInputProps) => {
  return (
    <MuiOutlinedInput
      id={`${id}-input`}
      color={color}
      defaultValue={defaultValue}
      disabled={disabled}
      endAdornment={endAdornment}
      error={error}
      fullWidth={fullWidth}
      inputComponent={inputComponent}
      inputProps={inputProps}
      inputRef={inputRef}
      multiline={multiline}
      name={name}
      label={label}
      placeholder={placeholder}
      readOnly={readOnly}
      required={required}
      rows={rows}
      startAdornment={startAdornment}
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      autoFocus={autoFocus}
      sx={{
        ...style,
        "&.MuiInputBase-root": {
          backgroundColor: palette.common.white,
        },
      }}
    />
  );
};

export const InputLabel = ({ id, children, style }: MuiInputLabelProps) => {
  return (
    <MuiInputLabel id={`${id}-input-label`} sx={style}>
      {children}
    </MuiInputLabel>
  );
};

export const InputAdornment = ({
  position,
  children,
}: MuiInputAdornmentProps) => {
  return <MuiInputAdornment position={position}>{children}</MuiInputAdornment>;
};
