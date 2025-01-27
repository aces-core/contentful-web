import type { CfFetchById } from "@maverick/types";

import { CfCardSlider } from "./render";
import { fetchCardSlider } from "./services";
import { CardSliderSkeleton } from "./skeleton";

export const CfCardSliderServer = async ({
  id,
  lang,
  preview,
}: CfFetchById) => {
  let data;

  try {
    data = await fetchCardSlider(id);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <CardSliderSkeleton />;
  }

  if (!data) {
    return <CardSliderSkeleton />;
  }

  return (
    <CfCardSlider
      internalTitle={data.internalTitle}
      headline={data.headline}
      bodyCopy={data.bodyCopy}
      cards={data.cardsCollection?.items}
      __typename={data.__typename}
      lang={lang}
      id={id}
      preview={preview}
    />
  );
};
