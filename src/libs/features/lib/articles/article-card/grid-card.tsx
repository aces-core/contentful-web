"use client";

import { useState } from "react";

import { RouteDirectory } from "@aces/types";
import { estimateReadTime, formatDate, truncate } from "@aces/utils";
import { useGetLocale } from "@aces/hooks";
import { palette, shape } from "@aces/theme";
import { FlexBox, H6, LinkWrapper, Skeleton, Text } from "@aces/ui";
import { CfImageCover } from "@aces/cf";

import { ArticleCardProps } from "./types";

export const ArticleCard = ({
  featuredImage,
  title,
  excerpt,
  bodyCopy,
  publishDate,
  slug,
  lang,
  preview,
}: ArticleCardProps) => {
  const [hover, setHover] = useState(false);
  const { t, loading } = useGetLocale(lang, "common");

  const readTime = estimateReadTime(bodyCopy.json);

  return (
    <LinkWrapper
      href={`${RouteDirectory.Articles}/${slug}`}
      style={{ width: "100%" }}
    >
      <FlexBox
        flexDirection="column"
        width="100%"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          cursor: "pointer",
        }}
      >
        <CfImageCover
          internalTitle={featuredImage.internalTitle}
          image={featuredImage.image}
          coverWidth={"100%"}
          coverHeight={200}
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
        <FlexBox flexDirection="column" marginTop={3} gap={2}>
          <Text.Small color={palette.grey[500]}>
            {formatDate(publishDate, lang)}
          </Text.Small>
          <Text
            fontWeight={700}
            color={hover ? palette.primary.main : palette.text.primary}
            style={{
              transition: "250ms ease",
            }}
          >
            {title}
          </Text>
          <H6 component="p">{truncate(excerpt, 14)}</H6>
          {!loading ? (
            <Text.Small
              color={palette.primary.main}
              style={{ textDecoration: "underline" }}
            >{`${readTime.readTimeMinutes} ${t.postType.min} ${t.postType.read}`}</Text.Small>
          ) : (
            <Skeleton variant="text" width="80px" />
          )}
        </FlexBox>
      </FlexBox>
    </LinkWrapper>
  );
};
