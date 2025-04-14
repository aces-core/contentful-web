import { FlexBox, Skeleton } from "@aces/ui";

export const CardSkeleton = () => {
  return (
    <FlexBox flexDirection={"column"} alignItems={"center"}>
      <Skeleton width={"100%"} height={180} />
      <FlexBox flexDirection={"column"} padding={8}>
        <Skeleton variant="text" width={180} style={{ marginBottom: 2 }} />
        <Skeleton variant="text" width={180} style={{ marginBottom: 2 }} />
      </FlexBox>
    </FlexBox>
  );
};
