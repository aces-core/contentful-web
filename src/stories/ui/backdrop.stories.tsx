import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import {
  Box,
  Backdrop as BackdropUI,
  FormControlLabel,
  Switch,
} from "@aces/ui";

const meta: Meta = {
  title: "UI/Backdrop",
  component: BackdropUI,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: { type: "select" },
      options: ["dark", "light"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Backdrop: Story = {
  args: {
    mode: "dark",
  },
  render: ({ mode }) => {
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked((prev) => !prev);

    return (
      <Box style={{ height: "180px", paddingX: 1, overflow: "hidden" }}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show Backdrop"
          style={{ marginBottom: 7 }}
        />
        <BackdropUI
          mode={mode}
          open={checked}
          onClick={() => setChecked(false)}
        />
      </Box>
    );
  },
};
