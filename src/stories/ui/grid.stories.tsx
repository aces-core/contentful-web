import type { Meta, StoryObj } from "@storybook/react";

import { Box, Row, Col, Paper } from "@aces/ui";

const meta = {
  title: "UI/Grid",
  component: Row,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    spacing: 2,
    marginY: 0,
    marginX: 0,
    marginTop: 0,
    marginBottom: 0,
    flexDirection: {
      xs: "column",
      md: "row",
    },
    alignItems: "center",
    rowSpacing: 2,
    columnSpacing: 2,
    style: {},
  },
} satisfies Meta<typeof Row>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Grid: Story = {
  render: ({
    spacing,
    marginY,
    marginX,
    marginTop,
    marginBottom,
    flexDirection,
    alignItems,
    rowSpacing,
    columnSpacing,
    style,
  }) => {
    return (
      <Box style={{ width: "600px" }}>
        <Row
          spacing={spacing}
          marginY={marginY}
          marginX={marginX}
          marginTop={marginTop}
          marginBottom={marginBottom}
          flexDirection={flexDirection}
          alignItems={alignItems}
          rowSpacing={rowSpacing}
          columnSpacing={columnSpacing}
          style={style}
        >
          <Col size={8}>
            <Paper elevation={3} style={{ textAlign: "center" }}>
              size=8
            </Paper>
          </Col>
          <Col size={4}>
            <Paper elevation={3} style={{ textAlign: "center" }}>
              size=4
            </Paper>
          </Col>
        </Row>
      </Box>
    );
  },
};
