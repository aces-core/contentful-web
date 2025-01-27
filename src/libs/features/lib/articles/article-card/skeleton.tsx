import { Box, FlexBox, Skeleton } from "@maverick/ui";

export const ArticleCardSkeleton = () => {
  return (
    <FlexBox
      borderRadius="12px"
      flexDirection="column"
      style={{
        backgroundColor: "grey.50",
        height: "100%",
      }}
    >
      <Skeleton
        variant="rectangular"
        height={380}
        style={{ height: { xs: 200, md: 380 } }}
      />
      <Box paddingX={4} paddingY={6}>
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="40%" />
      </Box>
    </FlexBox>
  );
};
