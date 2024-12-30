"use client";

import {
  Fade,
  FormControlLabel,
  H6,
  Paper,
  Text,
  Switch,
  Backdrop,
} from "@maverick/ui";
import { useState } from "react";

export const TestComponents = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={() => setChecked((prev) => !prev)}
          />
        }
        label="Show Fade"
      />
      <Backdrop
        mode={"dark"}
        open={checked}
        onClick={() => setChecked(false)}
      ></Backdrop>
    </>
  );
};
