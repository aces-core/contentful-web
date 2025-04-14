import { Box, Skeleton } from "@aces/ui";

export const ImageOverlayHeroSkeleton = () => {
  return (
    <Box style={{ position: "relative" }}>
      <Skeleton width={"100%"} height={400} />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          width: "100%",
          height: "100%",
        }}
      >
        <Skeleton variant="text" width={"50%"} height={16} />
        <Skeleton
          variant="text"
          width={"40%"}
          height={16}
          style={{ marginY: 1 }}
        />
        <Skeleton
          variant="rounded"
          width={140}
          height={40}
          style={{ marginY: 1 }}
        />
      </Box>
    </Box>
  );
};
