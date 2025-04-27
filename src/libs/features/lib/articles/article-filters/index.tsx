"use client";

import { defaultLocale, Locale } from "@aces/i18n";
import { CfCollectionItems } from "@aces/types";
import { useGetLocale, useMediaQuery } from "@aces/hooks";
import { Box, FlexBox, Skeleton, Text } from "@aces/ui";

import { ArticlesSort } from "./sort";
import { CategorySelect } from "./category-select";
import { CategoryToggle } from "./category-toggle";

import { ListingDisplay } from "./listing-display";

import { ArticleFeatures } from "../../../config";

interface ArticleListingFiltersProps {
  categoriesCollection: CfCollectionItems;
  total: number;
  lang: Locale;
}

export const ArticleListingFilters = ({
  categoriesCollection,
  total,
  lang = defaultLocale,
}: ArticleListingFiltersProps) => {
  const { t, loading } = useGetLocale(lang, "common");
  const { isLargerThanMd } = useMediaQuery();

  return (
    <Box>
      {ArticleFeatures.ShowListingTitle && (
        <Box marginBottom={4}>
          {loading ? (
            <Skeleton variant="text" width={100} />
          ) : (
            <Text.SubtitleSmall>{t.postType.listingTitle}</Text.SubtitleSmall>
          )}
        </Box>
      )}
      <FlexBox
        alignItems={{ xs: "flex-start", md: "center" }}
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        width={"100%"}
      >
        <Box width={"100%"}>
          {ArticleFeatures.ShowFilters === "select" ? (
            <CategorySelect
              categoriesCollection={categoriesCollection}
              lang={lang}
            />
          ) : ArticleFeatures.ShowFilters === "toggle" ? (
            <CategoryToggle
              categoriesCollection={categoriesCollection}
              total={total}
              lang={lang}
            />
          ) : null}
        </Box>
        <FlexBox
          alignItems={"center"}
          flexDirection={{ xs: "row" }}
          justifyContent={{ xs: "flex-end" }}
          width={{ xs: "100%", md: "auto" }}
        >
          {ArticleFeatures.ShowSort && (
            <Box marginTop={{ xs: 5, md: 0 }}>
              <ArticlesSort lang={lang} />
            </Box>
          )}
          {ArticleFeatures.ShowDisplayTypes && isLargerThanMd && (
            <ListingDisplay lang={lang} />
          )}
        </FlexBox>
      </FlexBox>
    </Box>
  );
};
