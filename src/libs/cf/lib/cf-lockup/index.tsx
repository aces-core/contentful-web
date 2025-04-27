import type { CfFetchById, Nested } from "@aces/types";

import { CfLockup } from "./render";
import { fetchLockup } from "./services";
import { LockupSkeleton } from "./skeleton";

export interface CfLockupServerProps extends CfFetchById, Nested {}

export const CfLockupServer = async ({
  id,
  preview,
  lang,
  nested,
}: CfLockupServerProps) => {
  let data;

  try {
    data = await fetchLockup(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <LockupSkeleton />;
  }

  if (!data) {
    return <LockupSkeleton />;
  }

  return (
    <CfLockup
      internalTitle={data.internalTitle}
      headline={data.headline}
      subhead={data.subhead}
      bodyCopy={data.bodyCopy}
      buttonsCollection={data.buttonsCollection}
      media={data.media}
      mediaSize={data.mediaSize}
      mediaAlignment={data.mediaAlignment}
      mediaBleed={data.mediaBleed}
      __typename={data.__typename}
      nested={nested}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
