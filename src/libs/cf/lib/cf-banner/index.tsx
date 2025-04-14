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
      subhead={data.subhead}
      button={data.button}
      backgroundColor={data.backgroundColor}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
