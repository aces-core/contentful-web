import { Box, Container, FlexBox, Skeleton } from "@aces/ui";

import { NavigationSkeleton } from "../../navigations";

export const HeaderSkeleton = () => {
  return (
    <>
      <Box style={{ height: "80px" }} />
      <FlexBox
        component="header"
        alignItems="center"
        justifyContent="center"
        style={{
          backgroundColor: "common.white",
          position: "fixed",
          top: 0,
          height: "80px",
          width: "100%",
          zIndex: 1000,
        }}
      >
        <Container>
          <FlexBox alignItems="center" justifyContent="space-between">
            <Skeleton width={250} height={48} />
            <NavigationSkeleton />
          </FlexBox>
        </Container>
      </FlexBox>
    </>
  );
};
