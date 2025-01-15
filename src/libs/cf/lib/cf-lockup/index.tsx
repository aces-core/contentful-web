import type { CfFetchById } from "@maverick/types";

import { CfLockup } from "./render";
import { fetchLockup } from "./services";
import { LockupSkeleton } from "./skeleton";

export const CfLockupServer = async ({ id, preview, lang }: CfFetchById) => {
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
      bodyCopy={data.bodyCopy}
      buttonsCollection={data.buttonsCollection}
      media={data.media}
      mediaSize={data.mediaSize}
      mediaAlignment={data.mediaAlignment}
      nested={data.nested}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
