import { Locale } from "@aces/i18n";
import { Box, Col, Divider, Row, Text } from "@aces/ui";

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

  if (data.length) {
    return (
      <Box>
        <Divider marginY={10} />
        {title ? (
          <Text.SubtitleSmall marginBottom={5}>{title}</Text.SubtitleSmall>
        ) : null}
        <Row columnSpacing={5} rowSpacing={7}>
          {data.map((item: ArticleCardProps) => (
            <Col
              key={item.slug}
              size={{ xs: 12, sm: 6, lg: 3 }}
              style={{ display: "flex" }}
            >
              <ArticleCard
                featuredImage={item.featuredImage}
                title={item.title}
                excerpt={item.excerpt}
                publishDate={item.publishDate}
                bodyCopy={item.bodyCopy}
                slug={item.slug}
                lang={lang}
                preview={preview}
              />
            </Col>
          ))}
        </Row>
      </Box>
    );
  }

  return null;
};
