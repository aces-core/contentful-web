import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { defaultLocale, getLocale } from "@maverick/i18n";
import { PageProps } from "@maverick/types";
import { flattenObjectArray, formatDate } from "@maverick/utils";
import { palette } from "@maverick/theme";
import {
  Avatar,
  Box,
  Chip,
  Container,
  Divider,
  FlexBox,
  H1,
  H6,
  Paper,
  Text,
} from "@maverick/ui";
import { CfImageCoverServer, CfRichTextRender } from "@maverick/cf";
import { buildMetadata, RelatedArticlesServer } from "@maverick/features";

import { fetchArticlePageData } from "./services";

export async function generateMetadata({
  params,
}: {
  params: Promise<PageProps>;
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const { isEnabled } = await draftMode();
  const { slug } = resolvedParams;

  const pageResponse = await fetchArticlePageData(slug, isEnabled);

  if (!pageResponse) {
    notFound();
  }

  return await buildMetadata(pageResponse.seo, {});
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<PageProps>;
}) {
  const resolvedParams = await Promise.resolve(params);

  const { isEnabled } = await draftMode();
  const { lang = defaultLocale, slug } = resolvedParams;

  const t = await getLocale(lang, "common");
  const pageResponse = await fetchArticlePageData(slug, isEnabled, lang);

  if (!pageResponse) {
    notFound();
  }

  return (
    <Container>
      <Box marginTop={20} maxWidth={1000}>
        <H1 marginBottom={8}>{pageResponse.title}</H1>
        <FlexBox marginBottom={5}>
          <Text>
            {`${t.by} `} <b>{pageResponse.author.name}</b>
          </Text>
          <Text> ・ {formatDate(pageResponse.publishDate, lang)}</Text>
        </FlexBox>
        <FlexBox flexWrap="wrap">
          {pageResponse.categoriesCollection.items.map(
            (category: { title: string; slug: string }) => (
              <Chip
                key={category.slug}
                label={category.title}
                uppercase={false}
                style={{
                  marginRight: "16px",
                  marginBottom: { xs: "16px", sm: 0 },
                }}
              />
            ),
          )}
        </FlexBox>
      </Box>
      <Box marginY={8}>
        <Paper elevation={1}>
          <CfImageCoverServer
            id={pageResponse.featuredImage.sys.id}
            lang={lang}
            preview={isEnabled}
            coverWidth="100%"
            coverHeight={{ xs: "380px", md: "500px" }}
            nested={true}
          />
          <Box paddingY={{ xs: 6, md: 12 }} paddingX={{ xs: 6, md: 16 }}>
            <CfRichTextRender
              richTextDocument={pageResponse.bodyCopy.json}
              preview={isEnabled}
              lang={lang}
            />
            <Divider marginY={16} marginX={{ xs: 2, md: 18 }} />
            <FlexBox flexDirection="column" alignItems="center">
              <Avatar
                image={pageResponse.author.profileImage.image.url}
                size={160}
                alt={pageResponse.author.profileImage.image.altText}
              />
              <H6 marginTop={4} marginBottom={2}>
                {pageResponse.author.name}
              </H6>
              <Text color={palette.grey[500]}>{pageResponse.author.role}</Text>
            </FlexBox>
          </Box>
        </Paper>
      </Box>
      <Box marginY={8}>
        <RelatedArticlesServer
          title={t.relatedArticles}
          categories={flattenObjectArray(
            pageResponse.categoriesCollection.items,
            "slug",
          )}
          excludeSlug={[slug]}
          limit={2}
          preview={isEnabled}
          lang={lang}
        />
      </Box>
    </Container>
  );
}
