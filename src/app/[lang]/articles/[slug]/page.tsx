import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { defaultLocale, getLocale } from "@maverick/i18n";
import { PageProps } from "@maverick/types";
import { formatDate } from "@maverick/utils";
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
import { CfGenerateSeo, CfImageServer, CfRichTextRender } from "@maverick/cf";

import { fetchArticlePageData } from "./services";

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
  console.log(pageResponse);
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
        <FlexBox>
          {pageResponse.categoriesCollection.items.map(
            (category: { title: string; slug: string }) => (
              <Chip
                key={category.slug}
                label={category.title}
                uppercase={false}
                style={{ marginRight: "16px" }}
              />
            ),
          )}
        </FlexBox>
      </Box>
      <Box marginY={8}>
        <Paper elevation={1}>
          <CfImageServer
            id={pageResponse.featuredImage.sys.id}
            lang={lang}
            preview={isEnabled}
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
    </Container>
  );
}
