import { Col, Row } from "@aces/ui";
import { ArticleCardSkeleton } from "../article-card/skeleton";

export const RelatedArticlesSkeleton = () => {
  return (
    <Row columnSpacing={12} rowSpacing={8}>
      <Col size={{ xs: 12, md: 6 }}>
        <ArticleCardSkeleton />
      </Col>
      <Col size={{ xs: 12, md: 6 }}>
        <ArticleCardSkeleton />
      </Col>
    </Row>
  );
};
