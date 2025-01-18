import { Locale } from "@maverick/i18n";
import { Box, Col, H4, Row } from "@maverick/ui";

import { ArticleCard, ArticleCardProps } from "../article-card";

import { fetchRelatedArticleData } from "./services";
import { RelatedArticlesSkeleton } from "./skeleton";

interface RelatedArticlesServerProps {
  title?: string;
  categories: string[];
  excludeSlug?: string[];
  limit: number;
  preview: boolean;
  lang: Locale;
}

export const RelatedArticlesServer = async ({
  title,
  categories,
  excludeSlug,
  limit,
  preview,
  lang,
}: RelatedArticlesServerProps) => {
  let data;

  try {
    data = await fetchRelatedArticleData(
      categories,
      excludeSlug,
      limit,
      preview,
      lang,
    );
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <RelatedArticlesSkeleton />;
  }

  if (!data) {
    return <RelatedArticlesSkeleton />;
  }

  return (
    <Box>
      {title ? (
        <H4 marginTop={16} marginBottom={8}>
          {title}
        </H4>
      ) : null}
      <Row columnSpacing={12} rowSpacing={8}>
        {data.map((item: ArticleCardProps) => (
          <Col
            key={item.slug}
            size={{ xs: 12, md: 6 }}
            style={{ display: "flex" }}
          >
            <ArticleCard
              featuredImage={item.featuredImage}
              title={item.title}
              author={item.author}
              publishDate={item.publishDate}
              slug={item.slug}
              lang={lang}
            />
          </Col>
        ))}
      </Row>
    </Box>
  );
};
