import type { CfFetchById } from "@aces/types";

import { CfCallout } from "./render";
import { fetchCalloutData } from "./services";
import { CalloutSkeleton } from "./skeleton";

export interface CfCalloutServerProps extends CfFetchById {}

export const CfCalloutServer = async ({
  id,
  preview,
  lang,
}: CfCalloutServerProps) => {
  let data;

  try {
    data = await fetchCalloutData(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <CalloutSkeleton />;
  }

  if (!data) {
    return <CalloutSkeleton />;
  }

  return (
    <CfCallout
      internalTitle={data.internalTitle}
      headline={data.headline}
      bodyCopy={data.bodyCopy}
      tags={data.tags}
      buttonsCollection={data.buttonsCollection}
      media={data.media}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
