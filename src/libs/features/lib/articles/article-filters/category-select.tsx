"use client";

import { useEffect, useState } from "react";

import { defaultLocale, Locale } from "@aces/i18n";
import { cfCollectionToSelectOptions } from "@aces/utils";
import { CfCollectionItems } from "@aces/types";
import { useGetLocale, useQueryParam } from "@aces/hooks";
import { Select, SelectChangeEvent, Skeleton } from "@aces/ui";

import { Query } from "../config";

interface CategorySelectProps {
  categoriesCollection: CfCollectionItems;
  lang: Locale;
}

export const CategorySelect = ({
  categoriesCollection,
  lang = defaultLocale,
}: CategorySelectProps) => {
  const { t, loading } = useGetLocale(lang, "common");
  const { getQueryParam, setQueryParam } = useQueryParam();

  const [categorySelected, setCategorySelected] = useState<string>("");

  const categories = cfCollectionToSelectOptions(
    categoriesCollection.items,
    "slug",
    "title",
  );

  // @ts-expect-error: SelectChangeEvent type is not correct
  const handleCategoriesChange = (event: SelectChangeEvent<string>) => {
    const newValue = event.target.value as string;

    setCategorySelected(newValue);
    setQueryParam(Query.categories, newValue);
  };

  const handleClearCategory = () => {
    setCategorySelected("");
    setQueryParam(Query.categories, null);
  };

  useEffect(() => {
    const categoriesParam = getQueryParam(Query.categories);
    if (categoriesParam) {
      setCategorySelected(categoriesParam);
    }
  }, []);

  return (
    <Select
      options={categories}
      label={
        !loading ? (
          t.postType.order.category
        ) : (
          <Skeleton variant="text" width="80px" />
        )
      }
      value={categorySelected}
      onChange={handleCategoriesChange}
      onClear={handleClearCategory}
    />
  );
};
