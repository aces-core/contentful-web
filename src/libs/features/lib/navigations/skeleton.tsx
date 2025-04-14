import { FlexBox, Skeleton } from "@aces/ui";

export const NavigationSkeleton = () => {
  return (
    <FlexBox alignItems="center" justifyContent="center">
      <FlexBox
        alignItems="center"
        justifyContent="space-between"
        style={{ display: { xs: "none", md: "flex" } }}
      >
        <Skeleton width={68} height={10} style={{ marginLeft: 3 }} />
        <Skeleton width={68} height={10} style={{ marginLeft: 3 }} />
        <Skeleton width={68} height={10} style={{ marginLeft: 3 }} />
      </FlexBox>
    </FlexBox>
  );
};
