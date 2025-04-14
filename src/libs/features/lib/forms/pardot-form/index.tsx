"use client";

import { ResponsiveSpacing } from "@aces/types";
import { Box } from "@aces/ui";

export interface PardotFormProps {
  pardotFormUrl: string;
  height?: ResponsiveSpacing;
  __typename?: string;
}

export const PardotForm = ({
  pardotFormUrl,
  height = "500px",
}: PardotFormProps) => {
  return (
    <Box style={{ width: "100%" }}>
      <Box
        component="iframe"
        src={pardotFormUrl}
        width="100%"
        height={height}
        style={{ border: "none" }}
      ></Box>
    </Box>
  );
};
