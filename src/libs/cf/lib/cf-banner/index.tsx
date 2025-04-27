import type { CfFetchById } from "@aces/types";

import { CfBanner } from "./render";
import { fetchBannerData } from "./services";
import { BannerSkeleton } from "./skeleton";

export const CfBannerServer = async ({ id, preview, lang }: CfFetchById) => {
  let data;

  try {
    data = await fetchBannerData(id, preview);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <BannerSkeleton />;
  }

  if (!data) {
    return <BannerSkeleton />;
  }

  return (
    <CfBanner
      internalTitle={data.internalTitle}
      headline={data.headline}
      bodyCopy={data.bodyCopy}
      button={data.button}
      theme={data.theme}
      media={data.media}
      mediaAlignment={data.mediaAlignment}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
