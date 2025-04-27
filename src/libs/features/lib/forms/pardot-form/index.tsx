"use client";

import { ResponsiveSpacing } from "@aces/types";
import { Box } from "@aces/ui";

export interface PardotFormProps {
  internalTitle: string;
  pardotFormUrl: string;
  height?: ResponsiveSpacing;
  __typename?: string;
}

export const PardotForm = ({ pardotFormUrl }: PardotFormProps) => {
  return (
    <Box style={{ width: "100%" }}>
      <div
        style={{ width: "100%" }}
        dangerouslySetInnerHTML={{ __html: pardotFormUrl }}
      />
    </Box>
  );
};
