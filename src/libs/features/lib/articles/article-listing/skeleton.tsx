import { Col, Row } from "@maverick/ui";

import { ArticleCardSkeleton } from "../article-card/skeleton";

export const ArticleListingSkeleton = ({ limit }: { limit: number }) => {
  return (
    <Row columnSpacing={12} rowSpacing={8}>
      {[...Array(limit)].map((_, index) => (
        <Col key={index} size={{ xs: 12, md: 6 }}>
          <ArticleCardSkeleton />
        </Col>
      ))}
    </Row>
  );
};
