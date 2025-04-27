"use client";

import { useEffect, useState } from "react";

import { defaultLocale, Locale } from "@aces/i18n";
import { useGetLocale, useQueryParam } from "@aces/hooks";
import {
  FlexBox,
  Icon,
  IconButton,
  Select,
  SelectChangeEvent,
  Skeleton,
} from "@aces/ui";

import {
  OrderByTypes,
  OrderSelectValueTypes,
  OrderTypes,
  Query,
} from "../config";

interface ArticlesSortProps {
  lang: Locale;
}

export const ArticlesSort = ({ lang = defaultLocale }: ArticlesSortProps) => {
  const { t, loading } = useGetLocale(lang, "common");
  const { getQueryParam, setQueryParam } = useQueryParam();

  const [orderSelected, setOrderSelected] =
    useState<OrderSelectValueTypes>("date");
  const [orderBy, setOrderBy] = useState<OrderByTypes>("DESC");

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

  const parseOrderType = (
    order: string,
  ): { orderSelected: OrderSelectValueTypes; orderBy: OrderByTypes } => {
    switch (order) {
      case OrderTypes.DateASC:
        return { orderSelected: "date", orderBy: "ASC" };
      case OrderTypes.DateDESC:
        return { orderSelected: "date", orderBy: "DESC" };
      case OrderTypes.AlphaASC:
        return { orderSelected: "title", orderBy: "ASC" };
      case OrderTypes.AlphaDESC:
        return { orderSelected: "title", orderBy: "DESC" };
      default:
        return { orderSelected: "date", orderBy: "DESC" };
    }
  };

  // @ts-expect-error: SelectChangeEvent type is not correct
  const handleOrderChange = (event: SelectChangeEvent<string>) => {
    const newValue = event.target.value as OrderSelectValueTypes;

    setOrderSelected(newValue);
    setQueryParam(Query.order, getOrderType(newValue, orderBy));
  };

  const handleOrderByChange = () => {
    const newValue = orderBy === "ASC" ? "DESC" : "ASC";

    setOrderBy(newValue);
    setQueryParam(Query.order, getOrderType(orderSelected, newValue));
  };

  useEffect(() => {
    const orderParam = getQueryParam(Query.order);
    if (orderParam) {
      const parsedOrder = parseOrderType(orderParam);
      setOrderSelected(parsedOrder.orderSelected);
      setOrderBy(parsedOrder.orderBy);
    }
  }, []);

  return (
    <FlexBox alignItems={"center"} marginLeft={{ xs: 0, sm: 5 }}>
      <IconButton
        onClick={handleOrderByChange}
        style={{ width: "48px", height: "48px", marginRight: 2 }}
      >
        <Icon icon={orderBy === "DESC" ? "South" : "North"} />
      </IconButton>
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
        value={orderSelected}
        onChange={handleOrderChange}
      />
    </FlexBox>
  );
};
