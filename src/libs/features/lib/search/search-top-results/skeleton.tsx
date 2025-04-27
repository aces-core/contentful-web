import { palette } from "@aces/theme";
import { Box, Col, Container, Row, Text, Skeleton } from "@aces/ui";
import { SearchableContentTypes, SearchConfig } from "../config";
import { ResultsCardSkeleton } from "../search-results/skeleton";

export const TopSearchResultsSkeleton = () => {
  const resultsCount =
    SearchConfig.TopResultsLimits *
    Object.values(SearchableContentTypes).length;
  return (
    <Box
      style={{ background: palette.grey[50] }}
      paddingTop={6}
      paddingBottom={8}
    >
      <Container>
        <Skeleton variant="text" width={80} style={{ marginBottom: 4 }} />
        <Row columnSpacing={4} rowSpacing={4} alignItems={"stretch"}>
          {Array.from({ length: resultsCount }).map((_, index) => (
            <Col
              key={index}
              size={{ xs: 12, md: 6 }}
              style={{ display: "flex", width: "100%" }}
            >
              <ResultsCardSkeleton />
            </Col>
          ))}
        </Row>
      </Container>
    </Box>
  );
};
