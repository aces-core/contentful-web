"use client";

import { useEffect, useState } from "react";

import type { CfFetchById } from "@aces/types";

import { CfModal } from "./render";
import { fetchModalData } from "./services";

export interface CfModalClientProps extends CfFetchById {}

export const CfModalClient = ({ id, preview, lang }: CfModalClientProps) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchModalData(id, preview, lang);
        setData(result);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, preview, lang]);

  if (loading || !data) {
    return null;
  }

  return (
    <CfModal
      internalTitle={data.internalTitle}
      modalHeader={data.modalHeader}
      modalBodyCollection={data.modalBodyCollection}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
