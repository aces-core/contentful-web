import type { CfFetchById, Nested } from "@aces/types";

import { CfVideoEmbed } from "./render";
import { fetchVideoEmbedData } from "./services";
import { VideoEmbedSkeleton } from "./skeleton";

export interface CfVideoEmbedServerProps extends CfFetchById, Nested {}

export const CfVideoEmbedServer = async ({
  id,
  preview,
  lang,
  nested,
}: CfVideoEmbedServerProps) => {
  let data;

  try {
    data = await fetchVideoEmbedData(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <VideoEmbedSkeleton />;
  }

  if (!data) {
    return <VideoEmbedSkeleton />;
  }

  return (
    <CfVideoEmbed
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
