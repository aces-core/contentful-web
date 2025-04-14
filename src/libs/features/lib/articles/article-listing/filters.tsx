import { Dispatch, SetStateAction, useState } from "react";

import { Locale } from "@aces/i18n";
import { useGetLocale, useQueryParam } from "@aces/hooks";
import { cfCollectionToSelectOptions } from "@aces/utils";
import {
  FlexBox,
  Box,
  Icon,
  IconButton,
  Select,
  SelectChangeEvent,
  Skeleton,
} from "@aces/ui";

import {
  DefaultOrder,
  OrderByTypes,
  OrderSelectValueTypes,
  OrderTypes,
  Query,
} from "../config";

interface ArticleListingFiltersProps {
  categories: string[] | null;
  categoriesCollection: any[];
  setCategories: Dispatch<SetStateAction<string[] | null>>;
  setOrder: Dispatch<SetStateAction<OrderTypes>>;
  lang: Locale;
}

export const ArticleListingFilters = ({
  categories,
  categoriesCollection,
  setCategories,
  setOrder,
  lang,
}: ArticleListingFiltersProps) => {
  const { t, loading } = useGetLocale(lang, "common");

  const [orderSelectValue, setOrderSelectValue] =
    useState<OrderSelectValueTypes>("date");
  const [orderBy, setOrderBy] = useState<OrderByTypes>("DESC");

  const categoryOptions = cfCollectionToSelectOptions(
    categoriesCollection,
    "slug",
    "title",
  );

  const setQueryParam = useQueryParam();

  const getOrderType = (
    orderSelectValue: OrderSelectValueTypes,
    orderBy: OrderByTypes,
  ): OrderTypes => {
    if (orderSelectValue === "date" && orderBy === "ASC") {
      return OrderTypes.DateASC;
    }
    if (orderSelectValue === "date" && orderBy === "DESC") {
      return OrderTypes.DateDESC;
    }
    if (orderSelectValue === "title" && orderBy === "ASC") {
      return OrderTypes.AlphaASC;
    }
    if (orderSelectValue === "title" && orderBy === "DESC") {
      return OrderTypes.AlphaDESC;
    }

    throw new Error("Invalid orderSelectValue or orderBy combination");
  };

  // @ts-expect-error: SelectChangeEvent type is not correct
  const handleCategoriesChange = (event: SelectChangeEvent<string>) => {
    const newValue = event.target.value as string;

    setCategories(newValue ? [newValue] : null);
    setQueryParam(Query.categories, newValue);
  };

  // @ts-expect-error: SelectChangeEvent type is not correct
  const handleOrderChange = (event: SelectChangeEvent<string>) => {
    const newValue = event.target.value as OrderSelectValueTypes;

    setOrderSelectValue(newValue);
    setOrder(newValue ? getOrderType(newValue, orderBy) : DefaultOrder);
    setQueryParam(Query.order, getOrderType(newValue, orderBy));
  };

  const handleOrderByChange = () => {
    const newValue = orderBy === "ASC" ? "DESC" : "ASC";

    setOrderBy(newValue);
    setOrder(
      newValue ? getOrderType(orderSelectValue, newValue) : DefaultOrder,
    );
    setQueryParam(Query.order, getOrderType(orderSelectValue, newValue));
  };

  const handleClearCategory = () => {
    setCategories(null);
    setQueryParam(Query.categories, null);
  };

  return (
    <FlexBox
      flexDirection={{ xs: "column", sm: "row" }}
      style={{ width: { xs: "100%", sm: "auto" } }}
    >
      <Box marginLeft={{ xs: 0, sm: 6 }} marginBottom={{ xs: 6, sm: 0 }}>
        <Select
          options={categoryOptions}
          label={
            !loading ? (
              t.postType.order.category
            ) : (
              <Skeleton variant="text" width="80px" />
            )
          }
          value={categories}
          onChange={handleCategoriesChange}
          onClear={handleClearCategory}
        />
      </Box>
      <FlexBox
        marginLeft={{ xs: 0, sm: 6 }}
        style={{ width: { xs: "100%", sm: "auto" } }}
      >
        <Select
          options={[
            { value: "date", label: !loading ? t.postType.order.date : "" },
            { value: "title", label: !loading ? t.postType.order.title : "" },
          ]}
          label={
            !loading ? (
              t.postType.order.order
            ) : (
              <Skeleton variant="text" width="80px" />
            )
          }
          value={orderSelectValue}
          onChange={handleOrderChange}
        />
        <IconButton onClick={handleOrderByChange} style={{ width: "65px" }}>
          <Icon icon={orderBy === "DESC" ? "South" : "North"} />
        </IconButton>
      </FlexBox>
    </FlexBox>
  );
};
