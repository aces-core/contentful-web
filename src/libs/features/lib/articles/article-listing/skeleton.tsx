import { Box, Col, Row, Skeleton } from "@maverick/ui";

export const ArticleListingSkeleton = ({ limit }: { limit: number }) => {
  return (
    <Row columnSpacing={12} rowSpacing={8}>
      {[...Array(limit)].map((_, index) => (
        <Col key={index} size={{ xs: 12, md: 6 }}>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "12px",
              backgroundColor: "#f0f0f0",
              padding: "16px",
              gap: "10px",
              height: "100%",
            }}
          >
            <Skeleton variant="rectangular" height={400} />
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="40%" />
          </Box>
        </Col>
      ))}
    </Row>
  );
};
