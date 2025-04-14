import type { CfFetchById } from "@aces/types";

import { fetchImageOverlayHero } from "./services";
import { CfImageOverlayHero } from "./render";
import { ImageOverlayHeroSkeleton } from "./skeleton";

export const CfImageOverlayHeroServer = async ({
  id,
  preview,
  lang,
}: CfFetchById) => {
  let data;

  try {
    data = await fetchImageOverlayHero(id, preview);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <ImageOverlayHeroSkeleton />;
  }

  if (!data) {
    return <ImageOverlayHeroSkeleton />;
  }

  return (
    <CfImageOverlayHero
      internalTitle={data.internalTitle}
      headline={data.headline}
      subhead={data.subhead}
      buttonsCollection={data.buttonsCollection}
      image={data.image}
      fullOverlay={data.fullOverlay}
      slim={data.slim}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
