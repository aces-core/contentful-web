import { shape } from "@aces/theme";
import { Box, Col, FlexBox, Row, Skeleton } from "@aces/ui";

export const ArticleCardSkeleton = () => {
  return (
    <FlexBox
      borderRadius={shape.borderRadius}
      flexDirection="column"
      marginY={5}
      style={{
        backgroundColor: "grey.50",
        height: "100%",
      }}
    >
      <Skeleton
        variant="rectangular"
        height={200}
        style={{ height: { xs: 200 } }}
      />
      <Box paddingX={4} paddingY={6}>
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="40%" />
      </Box>
    </FlexBox>
  );
};

export const ArticleListCardSkeleton = () => {
  return (
    <FlexBox
      borderRadius={shape.borderRadius}
      flexDirection="column"
      marginY={5}
      style={{
        backgroundColor: "grey.50",
        height: "100%",
      }}
    >
      <Row alignItems={"center"} columnSpacing={5}>
        <Col size={{ xs: 12, md: 4 }}>
          <Skeleton
            variant="rectangular"
            height={180}
            style={{ height: { xs: 200 } }}
          />
        </Col>
        <Col size={{ xs: 12, md: 8 }}>
          <Box paddingX={4} paddingY={6}>
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="40%" />
          </Box>
        </Col>
      </Row>
    </FlexBox>
  );
};
