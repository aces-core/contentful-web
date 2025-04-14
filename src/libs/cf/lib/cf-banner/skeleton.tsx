import { componentSpacing, palette } from "@aces/theme";
import { Box, Container, FlexBox, Skeleton } from "@aces/ui";

export const BannerSkeleton = () => {
  return (
    <Container>
      <FlexBox
        style={{ position: "relative", height: "275px" }}
        marginY={{ xs: componentSpacing.xs, md: componentSpacing.md }}
      >
        <Skeleton
          height="100%"
          width="100%"
          style={{
            position: "absolute",
          }}
        />
        <FlexBox
          alignItems="center"
          justifyContent="space-between"
          paddingY={4}
          paddingX={10}
          width={"100%"}
        >
          <Box>
            <Skeleton
              variant="text"
              width="400px"
              style={{ background: palette.grey[50], marginBottom: 2 }}
            />
            <Skeleton
              variant="text"
              width="300px"
              style={{ background: palette.grey[50], marginBottom: 2 }}
            />
          </Box>
          <Box>
            <Skeleton
              width={120}
              height={40}
              style={{ background: palette.grey[50] }}
            />
          </Box>
        </FlexBox>
      </FlexBox>
    </Container>
  );
};
