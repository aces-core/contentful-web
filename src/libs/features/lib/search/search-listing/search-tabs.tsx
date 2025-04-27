"use client";

import { useEffect, useState } from "react";

import { useQueryParam } from "@aces/hooks";
import { Tab, Tabs } from "@aces/ui";

import {
  SearchContentTypeQuery,
  SearchConfig,
  SearchableContentTypes,
} from "../config";

export const SearchTabs = () => {
  const { getQueryParam, setQueryParam } = useQueryParam();
  const [tabValue, setTabValue] = useState<SearchableContentTypes>(
    SearchConfig.DefaultSearchContentType,
  );

  useEffect(() => {
    const contentTypeQuery = getQueryParam(SearchContentTypeQuery);

    if (
      Object.values(SearchableContentTypes).includes(
        contentTypeQuery as SearchableContentTypes,
      )
    ) {
      setTabValue(contentTypeQuery as SearchableContentTypes);
    } else {
      setTabValue(SearchConfig.DefaultSearchContentType);
    }
  }, [getQueryParam]);

  const handleTabClick = (value: SearchableContentTypes) => {
    setTabValue(value);
    setQueryParam(SearchContentTypeQuery, value);
  };

  return (
    <Tabs value={tabValue} variant="standard" marginTop={6} showBorder={true}>
      {Object.entries(SearchableContentTypes).map(([key, value]) => (
        <Tab
          key={value}
          label={key}
          value={value}
          onClick={() => handleTabClick(value)}
        />
      ))}
    </Tabs>
  );
};
