import { Locale } from "@aces/i18n";
import { Box, Col, Divider, FlexBox, Row, Text } from "@aces/ui";

import { ArticleCardProps } from "../article-card";

import { fetchFeaturedArticlesData } from "./services";
import {
  FeaturedArticlesCard,
  PrimaryFeaturedArticlesCard,
} from "./featured-articles-cards";
import { FeaturedArticlesSkeleton } from "./skeleton";

interface FeaturedArticlesServerProps {
  title?: string;
  preview: boolean;
  lang: Locale;
}

export const FeaturedArticlesServer = async ({
  title,
  preview,
  lang,
}: FeaturedArticlesServerProps) => {
  let data;

  try {
    data = await fetchFeaturedArticlesData(preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <FeaturedArticlesSkeleton />;
  }

  if (!data) {
    return <FeaturedArticlesSkeleton />;
  }

  if (data.length) {
    return (
      <Box marginY={8}>
        {title ? (
          <Text.SubtitleSmall marginBottom={4}>{title}</Text.SubtitleSmall>
        ) : null}
        <Row columnSpacing={5} rowSpacing={5} marginBottom={10}>
          <Col size={{ xs: 12, md: 8 }}>
            {data.slice(0, 1).map((item: ArticleCardProps) => (
              <PrimaryFeaturedArticlesCard
                key={item.slug}
                featuredImage={item.featuredImage}
                title={item.title}
                excerpt={item.excerpt}
                publishDate={item.publishDate}
                bodyCopy={item.bodyCopy}
                slug={item.slug}
                lang={lang}
                preview={preview}
              />
            ))}
          </Col>
          <Col size={{ xs: 12, md: 4 }}>
            <FlexBox
              flexDirection={"column"}
              gap={5}
              justifyContent={"space-between"}
              height={"100%"}
            >
              {data.slice(1, 5).map((item: ArticleCardProps) => (
                <FeaturedArticlesCard
                  key={item.slug}
                  featuredImage={item.featuredImage}
                  title={item.title}
                  publishDate={item.publishDate}
                  bodyCopy={item.bodyCopy}
                  slug={item.slug}
                  lang={lang}
                  preview={preview}
                />
              ))}
            </FlexBox>
          </Col>
        </Row>
        <Divider />
      </Box>
    );
  }

  return null;
};
