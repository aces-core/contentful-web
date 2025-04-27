import type { CfFetchById } from "@aces/types";

import { CfDefaultHero } from "./render";
import { fetchDefaultHeroData } from "./services";
import { DefaultHeroSkeleton } from "./skeleton";

export interface CfDefaultHeroServerProps extends CfFetchById {}

export const CfDefaultHeroServer = async ({
  id,
  preview,
  lang,
}: CfDefaultHeroServerProps) => {
  let data;

  try {
    data = await fetchDefaultHeroData(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <DefaultHeroSkeleton />;
  }

  if (!data) {
    return <DefaultHeroSkeleton />;
  }

  return (
    <CfDefaultHero
      internalTitle={data.internalTitle}
      headline={data.headline}
      subhead={data.subhead}
      media={data.media}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
