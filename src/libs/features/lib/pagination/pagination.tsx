"use client";

import { useQueryParam } from "@aces/hooks";
import {
  PaginationProps as UiPaginationProps,
  Pagination as UiPagination,
  FlexBox,
} from "@aces/ui";

import { PaginationUrlParam } from "../../config";
import { useEffect } from "react";

interface PaginationProps extends Pick<UiPaginationProps, "color" | "count"> {
  align?: "flex-start" | "center" | "flex-end";
  onChange?: () => void;
}

export const Pagination = ({
  align = "center",
  color,
  count,
  onChange,
}: PaginationProps) => {
  const { getQueryParam, setQueryParam } = useQueryParam();

  const pageParam = getQueryParam(PaginationUrlParam);
  const pageValue = pageParam ? parseInt(pageParam, 10) : 1;

  const handleOnChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setQueryParam(PaginationUrlParam, value.toString());
    if (onChange) {
      onChange();
    }
  };

  useEffect(() => {
    if (!pageParam) {
      setQueryParam(PaginationUrlParam, "1");
    }
  }, []);

  return (
    <FlexBox justifyContent={align} width={"100%"} marginY={10}>
      <UiPagination
        color={color}
        count={count}
        page={pageValue}
        onChange={handleOnChange}
      />
    </FlexBox>
  );
};
