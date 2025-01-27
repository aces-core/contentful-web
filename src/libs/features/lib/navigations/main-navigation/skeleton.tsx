import { FlexBox, Icon, IconButton, Skeleton } from "@maverick/ui";

export const MainNavigationSkeleton = () => {
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
      <FlexBox
        alignItems="center"
        justifyContent="flex-end"
        style={{ display: { xs: "flex", md: "none" } }}
      >
        <IconButton color="primary" size="large">
          <Icon icon="Menu" />
        </IconButton>
      </FlexBox>
    </FlexBox>
  );
};
