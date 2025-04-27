import { shape } from "@aces/theme";
import { Box, Card, Skeleton } from "@aces/ui";

export const ResultsCardSkeleton = () => {
  return (
    <Card borderRadius={shape.borderRadius}>
      <Box padding={5}>
        <Skeleton variant="text" width={60} style={{ marginBottom: 4 }} />
        <Skeleton variant="text" width={120} style={{ marginBottom: 4 }} />
        <Box>
          <Skeleton variant="text" width={"100%"} style={{ marginBottom: 1 }} />
          <Skeleton variant="text" width={"80%"} style={{ marginBottom: 1 }} />
        </Box>
      </Box>
    </Card>
  );
};

export const ResultsItemSkeleton = () => {
  return (
    <Box marginY={2}>
      <Skeleton variant="text" width={120} style={{ marginBottom: 2 }} />
      <Skeleton variant="text" width={"100%"} style={{ marginBottom: 2 }} />
      <Skeleton variant="text" width={60} />
    </Box>
  );
};
