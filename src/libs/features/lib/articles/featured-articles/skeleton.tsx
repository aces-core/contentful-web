import { shape } from "@aces/theme";
import { Box, Col, Divider, FlexBox, Skeleton, Row } from "@aces/ui";

export const FeaturedArticlesSkeleton = () => {
  return (
    <Box marginY={8}>
      <Skeleton variant="text" width={"240px"} style={{ marginBottom: 4 }} />
      <Row columnSpacing={4} rowSpacing={7} marginBottom={10}>
        <Col size={{ xs: 12, md: 8 }}>
          <PrimaryFeaturedArticlesCardSkeleton />
        </Col>
        <Col size={{ xs: 12, md: 4 }}>
          <FlexBox
            flexDirection={"column"}
            gap={5}
            justifyContent={"space-between"}
            height={"100%"}
          >
            <FeaturedArticlsCardSkeleton />
            <FeaturedArticlsCardSkeleton />
            <FeaturedArticlsCardSkeleton />
            <FeaturedArticlsCardSkeleton />
          </FlexBox>
        </Col>
      </Row>
      <Divider />
    </Box>
  );
};

export const PrimaryFeaturedArticlesCardSkeleton = () => {
  return (
    <FlexBox
      justifyContent={"center"}
      borderRadius={shape.borderRadius}
      flexDirection="column"
      position={"relative"}
      style={{
        height: "100%",
        overflow: "hidden",
        maxHeight: "580px",
      }}
    >
      <Box
        position={"absolute"}
        height={"100%"}
        width={"100%"}
        style={{
          backgroundColor: "grey.200",
        }}
      />
      <Box
        borderRadius={shape.borderRadius}
        position={"relative"}
        margin={8}
        padding={4}
        width={"50%"}
        height={"100%"}
        style={{
          backgroundColor: "grey.50",
          minWidth: "450px",
          zIndex: 2,
        }}
      >
        <Skeleton variant="text" width="30%" style={{ marginBottom: 8 }} />
        <Skeleton variant="text" height={"40px"} width="90%" />
        <Skeleton variant="text" height={"40px"} width="80%" />
        <Skeleton variant="text" height={"40px"} width="85%" />
        <Skeleton variant="text" width="100%" style={{ marginTop: 6 }} />
        <Skeleton variant="text" width="90%" />
        <Skeleton variant="text" width="95%" />
        <Skeleton variant="text" width="92%" />
      </Box>
    </FlexBox>
  );
};

export const FeaturedArticlsCardSkeleton = () => {
  return (
    <FlexBox flex={1}>
      <Row columnSpacing={4} rowSpacing={4}>
        <Col size={{ xs: 6 }}>
          <Skeleton
            variant="rounded"
            height={"100%"}
            style={{ minHeight: "130px" }}
          />
        </Col>
        <Col size={{ xs: 6 }}>
          <FlexBox
            flexDirection="column"
            justifyContent="center"
            paddingY={1}
            height="100%"
          >
            <Skeleton
              variant="text"
              height={"12px"}
              width="45%"
              style={{ marginBottom: 2 }}
            />
            <Skeleton variant="text" height={"20px"} width="90%" />
            <Skeleton variant="text" height={"20px"} width="95%" />
            <Skeleton
              variant="text"
              height={"12px"}
              width="30%"
              style={{ marginTop: 2 }}
            />
          </FlexBox>
        </Col>
      </Row>
    </FlexBox>
  );
};
