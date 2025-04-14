import type { CfFetchById, Nested } from "@aces/types";

import { CfCodeEmbed } from "./render";
import { fetchCodeEmbedData } from "./services";
import { CodeEmbedSkeleton } from "./skeleton";

export interface CfCodeEmbedServerProps extends CfFetchById, Nested {}

export const CfCodeEmbedServer = async ({
  id,
  preview,
  lang,
  nested,
}: CfCodeEmbedServerProps) => {
  let data;

  try {
    data = await fetchCodeEmbedData(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <CodeEmbedSkeleton />;
  }

  if (!data) {
    return <CodeEmbedSkeleton />;
  }

  return (
    <CfCodeEmbed
      internalTitle={data.internalTitle}
      embedCode={data.embedCode}
      nested={nested}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
