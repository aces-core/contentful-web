"use client";

import { useState } from "react";

import { Locale } from "@aces/i18n";
import { CfImageProps, CfRichText, RouteDirectory } from "@aces/types";
import { estimateReadTime, formatDate, truncate } from "@aces/utils";
import { useGetLocale } from "@aces/hooks";
import { palette, shape } from "@aces/theme";
import {
  Col,
  FlexBox,
  H4,
  H6,
  Icon,
  IconButton,
  LinkWrapper,
  Row,
  Skeleton,
  Text,
} from "@aces/ui";
import { CfImageCover, CfImageFill } from "@aces/cf";

export interface FeaturedArticlesCardProps {
  featuredImage: CfImageProps;
  publishDate: string;
  title: string;
  slug: string;
  excerpt?: string;
  bodyCopy: CfRichText;
  lang: Locale;
  preview: boolean;
}

export const PrimaryFeaturedArticlesCard = ({
  featuredImage,
  title,
  excerpt,
  bodyCopy,
  publishDate,
  slug,
  lang,
  preview,
}: FeaturedArticlesCardProps) => {
  const [hover, setHover] = useState(false);
  const { t, loading } = useGetLocale(lang, "common");

  const readTime = estimateReadTime(bodyCopy.json);

  return (
    <LinkWrapper href={`${RouteDirectory.Articles}/${slug}`}>
      <FlexBox
        flexDirection="column"
        width="100%"
        height="100%"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        position="relative"
        style={{
          cursor: "pointer",
        }}
      >
        <CfImageFill
          internalTitle={featuredImage.internalTitle}
          image={featuredImage.image}
          containerMaxWidth={"100%"}
          containerHeight={"100%"}
          borderRadius={shape.borderRadius}
          style={{
            transition: "250ms ease",
            transform: hover ? "scale(1.05)" : "none",
            position: "absolute",
          }}
          __typename={featuredImage.__typename}
          id={featuredImage?.sys?.id || ""}
          lang={lang}
          preview={preview}
        />
        <FlexBox
          padding={{ xs: 5, sm: 8 }}
          position="relative"
          minHeight="100%"
          style={{
            zIndex: 2,
          }}
        >
          <FlexBox
            bgcolor={palette.common.white}
            borderRadius={shape.borderRadius}
            flexDirection="column"
            gap={4}
            padding={{ xs: 5, sm: 8 }}
            maxWidth={450}
          >
            <Text.Small color={palette.grey[500]}>
              {formatDate(publishDate, lang)} .{"  "}
              {!loading ? (
                `${readTime.readTimeMinutes} ${t.postType.min} ${t.postType.read}`
              ) : (
                <Skeleton
                  height={4}
                  width="60px"
                  variant="text"
                  component="span"
                  style={{ display: "inline-block" }}
                />
              )}
            </Text.Small>
            <H4
              color={hover ? palette.primary.main : palette.text.primary}
              style={{
                transition: "250ms ease",
              }}
            >
              {title}
            </H4>
            {excerpt && <Text lineHeight={1.6}>{truncate(excerpt, 50)}</Text>}
            <FlexBox justifyContent={"flex-end"} marginTop={2}>
              <IconButton size="large" variant="outlined">
                <Icon icon="ArrowTopRight" size={24} />
              </IconButton>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </LinkWrapper>
  );
};

export const FeaturedArticlesCard = ({
  featuredImage,
  title,
  bodyCopy,
  publishDate,
  slug,
  lang,
  preview,
}: FeaturedArticlesCardProps) => {
  const [hover, setHover] = useState(false);
  const { t, loading } = useGetLocale(lang, "common");

  const readTime = estimateReadTime(bodyCopy.json);

  return (
    <LinkWrapper
      href={`${RouteDirectory.Articles}/${slug}`}
      style={{
        display: "flex",
        flex: 1,
      }}
    >
      <FlexBox
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        flex={1}
        style={{
          cursor: "pointer",
        }}
      >
        <Row columnSpacing={4} rowSpacing={4} flexDirection={{ xs: "row" }}>
          <Col size={{ xs: 6 }}>
            <CfImageCover
              internalTitle={featuredImage.internalTitle}
              image={featuredImage.image}
              coverWidth={"100%"}
              coverHeight={"100%"}
              nested={true}
              borderRadius={shape.borderRadius}
              style={{
                transition: "250ms ease",
                transform: hover ? "scale(1.05)" : "none",
              }}
              __typename={featuredImage.__typename}
              id={featuredImage?.sys?.id || ""}
              lang={lang}
              preview={preview}
            />
          </Col>
          <Col size={{ xs: 6 }}>
            <FlexBox
              flexDirection="column"
              justifyContent="center"
              gap={3}
              paddingY={1}
              height="100%"
            >
              <Text.Small color={palette.grey[500]}>
                {formatDate(publishDate, lang)}
              </Text.Small>
              <H6
                fontWeight={700}
                color={hover ? palette.primary.main : palette.text.primary}
                style={{
                  transition: "250ms ease",
                }}
              >
                {truncate(title, 8)}
              </H6>
              {!loading ? (
                <Text.Small
                  color={palette.primary.main}
                  style={{ textDecoration: "underline" }}
                >{`${readTime.readTimeMinutes} ${t.postType.min} ${t.postType.read}`}</Text.Small>
              ) : (
                <Skeleton variant="text" width="80px" />
              )}
            </FlexBox>
          </Col>
        </Row>
      </FlexBox>
    </LinkWrapper>
  );
};
