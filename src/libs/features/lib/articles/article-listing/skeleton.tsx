"use client";

import { useArticlesState } from "@aces/store";
import { Col, Row } from "@aces/ui";

import {
  ArticleCardSkeleton,
  ArticleListCardSkeleton,
} from "../article-card/skeleton";

export const ArticleListingSkeleton = ({ limit }: { limit: number }) => {
  const { articleListingDisplay } = useArticlesState();

  return (
    <Row columnSpacing={5} rowSpacing={7}>
      {[...Array(limit)].map((_, index) => (
        <Col
          key={index}
          size={
            articleListingDisplay === "grid"
              ? { xs: 12, sm: 6, md: 4, lg: 3 }
              : { xs: 12 }
          }
        >
          {articleListingDisplay === "grid" ? (
            <ArticleCardSkeleton />
          ) : (
            <ArticleListCardSkeleton />
          )}
        </Col>
      ))}
    </Row>
  );
};
