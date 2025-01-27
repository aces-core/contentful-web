"use client";

import React, { ReactElement } from "react";
import { useSearchParams } from "next/navigation";

type ChildProps = {
  query: string | null;
};

type SearchParamsProps = {
  children:
    | ReactElement<Partial<ChildProps>>
    | ReactElement<Partial<ChildProps>>[];
  queryParam: string;
};

export const SearchParams = ({ children, queryParam }: SearchParamsProps) => {
  const searchParams = useSearchParams();
  const queryValue = searchParams.get(queryParam);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { query: queryValue });
        }
        return child;
      })}
    </>
  );
};
