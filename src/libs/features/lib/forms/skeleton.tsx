import { Box, Skeleton } from "@aces/ui";

export const FormSkeleton = () => {
  return (
    <Box marginTop={4} width={"100%"}>
      <Box marginBottom={2}>
        <Skeleton variant="text" width={100} />
        <Skeleton variant="text" width={"100%"} height={60} />
      </Box>
      <Box marginBottom={2}>
        <Skeleton variant="text" width={100} />
        <Skeleton variant="text" width={"100%"} height={60} />
      </Box>
      <Box marginBottom={2}>
        <Skeleton variant="text" width={100} />
        <Skeleton variant="text" width={"100%"} height={60} />
      </Box>
      <Box marginBottom={8}>
        <Skeleton variant="text" width={100} />
        <Skeleton variant="text" width={"100%"} height={60} />
      </Box>
      <Skeleton
        variant="rounded"
        width={"100%"}
        height={60}
        style={{ borderRadius: "8px" }}
      />
    </Box>
  );
};
