import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import {
  Box,
  Paper,
  H6,
  Text,
  Collapse as CollapseUI,
  Fade as FadeUI,
  Grow as GrowUI,
  Slide as SlideUI,
  Zoom as ZoomUI,
  FormControlLabel,
  Switch,
} from "@aces/ui";

const meta: Meta = {
  title: "UI/Animations",
  component: CollapseUI,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: { type: "select" },
      options: ["up", "down", "left", "right"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Collapse: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked((prev) => !prev);

    return (
      <Box style={{ height: "180px", paddingX: 1, overflow: "hidden" }}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show Collapse"
          style={{ marginBottom: 7 }}
        />
        <CollapseUI in={checked} unmountOnExit>
          <Paper elevation={3} style={{ padding: 5 }}>
            <H6>Collapse Animation</H6>
            <Text>This content appears and collapses with animation.</Text>
          </Paper>
        </CollapseUI>
      </Box>
    );
  },
};

export const Fade: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <Box style={{ height: "180px", paddingX: 1, overflow: "hidden" }}>
        <FormControlLabel
          control={
            <Switch
              checked={checked}
              onChange={() => setChecked((prev) => !prev)}
            />
          }
          label="Show Fade"
          style={{ marginBottom: 7 }}
        />
        <FadeUI in={checked} unmountOnExit>
          <Paper elevation={3} style={{ padding: 5 }}>
            <H6>Fade Animation</H6>
            <Text>This content appears with a fade-in effect.</Text>
          </Paper>
        </FadeUI>
      </Box>
    );
  },
};

export const Grow: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <Box style={{ height: "180px", paddingX: 1, overflow: "hidden" }}>
        <FormControlLabel
          control={
            <Switch
              checked={checked}
              onChange={() => setChecked((prev) => !prev)}
            />
          }
          label="Show Grow"
          style={{ marginBottom: 7 }}
        />
        <GrowUI in={checked} unmountOnExit>
          <Paper elevation={3} style={{ padding: 5 }}>
            <H6>Grow Animation</H6>
            <Text>This content appears with a grow effect.</Text>
          </Paper>
        </GrowUI>
      </Box>
    );
  },
};

export const Slide: Story = {
  args: {
    direction: "up",
  },
  render: ({ direction }) => {
    const [checked, setChecked] = useState(false);

    return (
      <Box style={{ height: "180px", paddingX: 1, overflow: "hidden" }}>
        <FormControlLabel
          control={
            <Switch
              checked={checked}
              onChange={() => setChecked((prev) => !prev)}
            />
          }
          label="Show Slide"
          style={{ marginBottom: 7 }}
        />
        <SlideUI direction={direction} in={checked} unmountOnExit>
          <Paper elevation={3} style={{ padding: 5 }}>
            <H6>Slide Animation</H6>
            <Text>This content appears with a slide effect.</Text>
          </Paper>
        </SlideUI>
      </Box>
    );
  },
};

export const Zoom: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <Box style={{ height: "180px", paddingX: 1, overflow: "hidden" }}>
        <FormControlLabel
          control={
            <Switch
              checked={checked}
              onChange={() => setChecked((prev) => !prev)}
            />
          }
          label="Show Zoom"
          style={{ marginBottom: 7 }}
        />
        <ZoomUI in={checked} unmountOnExit>
          <Paper elevation={3} style={{ padding: 5 }}>
            <H6>Zoom Animation</H6>
            <Text>This content appears with a zoom effect.</Text>
          </Paper>
        </ZoomUI>
      </Box>
    );
  },
};
