import MuiInputLabel, {
  InputLabelProps as MuiInputLabelProps,
} from "@mui/material/InputLabel";

export function InputLabel({ id, children }: MuiInputLabelProps) {
  return <MuiInputLabel id={`${id}-input-label`}>{children}</MuiInputLabel>;
}
