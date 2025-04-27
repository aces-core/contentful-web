import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { ContentfulLivePreview } from "@contentful/live-preview";

import { defaultLocale, getLocale } from "@aces/i18n";
import { PageProps, RouteDirectory } from "@aces/types";
import { estimateReadTime, flattenObjectArray, formatDate } from "@aces/utils";
import { palette, shape } from "@aces/theme";
import { Box, Container, Divider, FlexBox, H3, H6, Text } from "@aces/ui";
import { CfImageCoverServer, CfRichTextRender } from "@aces/cf";
import {
  ArticleFeatures,
  ArticlePageBreadcrumbs,
  ArticleTags,
  AuthorBlock,
  BackToArticleListing,
  buildMetadata,
  EnableArticles,
  RelatedArticlesServer,
  SocialShareToolbar,
} from "@aces/features";

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

  if (!pageResponse || !EnableArticles) {
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
  const readTime = estimateReadTime(pageResponse.bodyCopy.json);

  if (!pageResponse || !EnableArticles) {
    notFound();
  }

  const templateRailsWidth = "240px";

  return (
    <>
      <Container>
        <ArticlePageBreadcrumbs
          article={{
            slug: pageResponse.slug,
            title: pageResponse.title,
          }}
          lang={lang}
        />
        <CfImageCoverServer
          id={pageResponse.featuredImage.sys.id}
          lang={lang}
          preview={isEnabled}
          borderRadius={shape.borderRadius}
          coverWidth="100%"
          coverHeight={{ xs: "320px", md: "580px" }}
          nested={true}
        />
        <FlexBox flexDirection={{ xs: "column", lg: "row" }}>
          <FlexBox
            flexDirection="column"
            justifyContent="space-between"
            width={{ xs: "100%", lg: templateRailsWidth }}
            paddingTop={8}
          >
            {ArticleFeatures.ShowSocialShare && (
              <SocialShareToolbar
                url={`${process.env.NEXT_PUBLIC_SITE_URL}${RouteDirectory.Articles}/${slug}`}
                hideXTwitter
              />
            )}
            <Box display={{ xs: "none", lg: "block" }}>
              <BackToArticleListing lang={lang} />
            </Box>
          </FlexBox>
          <Container maxWidth="md" nested style={{ flex: 1 }}>
            <Box marginTop={8}>
              <FlexBox flexDirection={{ xs: "column", sm: "row" }} gap={2}>
                <FlexBox flexDirection={{ xs: "column" }} marginBottom={5}>
                  {pageResponse.author && (
                    <Box marginRight={8} marginBottom={2}>
                      <Text
                        {...ContentfulLivePreview.getProps({
                          entryId: pageResponse.sys.id,
                          fieldId: "author",
                          locale: lang,
                        })}
                      >
                        {`${t.by} `} <b>{pageResponse.author.name}</b>
                      </Text>
                    </Box>
                  )}
                  <FlexBox>
                    <H6
                      component="p"
                      color={palette.grey[500]}
                      {...ContentfulLivePreview.getProps({
                        entryId: pageResponse.sys.id,
                        fieldId: "publishDate",
                        locale: lang,
                      })}
                    >
                      {formatDate(pageResponse.publishDate, lang)}
                    </H6>
                    <Box marginLeft={{ xs: 8 }}>
                      <H6 component="p" color={palette.grey[500]}>
                        {`${readTime.readTimeMinutes} ${t.postType.min} ${t.postType.read}`}
                      </H6>
                    </Box>
                  </FlexBox>
                </FlexBox>
              </FlexBox>
              <H3
                component="h1"
                {...ContentfulLivePreview.getProps({
                  entryId: pageResponse.sys.id,
                  fieldId: "title",
                  locale: lang,
                })}
              >
                {pageResponse.title}
              </H3>
              {pageResponse.categoriesCollection.items && (
                <ArticleTags
                  categoriesCollection={pageResponse.categoriesCollection}
                  {...ContentfulLivePreview.getProps({
                    entryId: pageResponse.sys.id,
                    fieldId: "categories",
                    locale: lang,
                  })}
                />
              )}
            </Box>
            <Box marginY={8}>
              {pageResponse.bodyCopy && (
                <CfRichTextRender
                  richTextDocument={pageResponse.bodyCopy.json}
                  preview={isEnabled}
                  lang={lang}
                  {...ContentfulLivePreview.getProps({
                    entryId: pageResponse.sys.id,
                    fieldId: "bodyCopy",
                    locale: lang,
                  })}
                />
              )}
              {pageResponse.author && (
                <>
                  <Divider marginY={16} marginX={{ xs: 2, md: 18 }} />
                  <AuthorBlock
                    profileImage={pageResponse.author.profileImage}
                    name={pageResponse.author.name}
                    role={pageResponse.author.role}
                  />
                </>
              )}
            </Box>
          </Container>
          <Box width={{ xs: "100%", lg: templateRailsWidth }}>
            <FlexBox
              justifyContent="center"
              display={{ xs: "flex", lg: "none " }}
            >
              <BackToArticleListing showIcon={false} lang={lang} />
            </FlexBox>
          </Box>
        </FlexBox>
        <Box marginBottom={15}>
          <RelatedArticlesServer
            title={t.postType.relatedArticlesTitle}
            categories={flattenObjectArray(
              pageResponse.categoriesCollection.items,
              "slug",
            )}
            excludeSlug={[slug]}
            limit={4}
            preview={isEnabled}
            lang={lang}
          />
        </Box>
      </Container>
    </>
  );
}
