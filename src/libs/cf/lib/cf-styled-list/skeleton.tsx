import { FlexBox, List, ListItem, Skeleton } from "@maverick/ui";

export const StyledListSkeleton = () => {
  return (
    <List
      style={{
        columnCount: { xs: 1, md: 2 },
        columnGap: 12,
        paddingBottom: 0,
      }}
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <ListItem
          key={index}
          style={{
            alignItems: "flex-start",
            display: "flex",
            marginBottom: `18px !important`,
          }}
        >
          <FlexBox alignItems="center" style={{ width: "100%" }}>
            <Skeleton
              variant="rectangular"
              width={18}
              height={12}
              style={{ marginRight: 3 }}
            />
            <Skeleton variant="text" height={24} width="100%" />
          </FlexBox>
        </ListItem>
      ))}
    </List>
  );
};
