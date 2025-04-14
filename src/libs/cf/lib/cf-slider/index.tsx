import type { CfFetchById } from "@aces/types";

import { CfSlider } from "./render";
import { fetchSlider } from "./services";
import { SliderSkeleton } from "./skeleton";

export const CfSliderServer = async ({ id, lang, preview }: CfFetchById) => {
  let data;

  try {
    data = await fetchSlider(id);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <SliderSkeleton />;
  }

  if (!data) {
    return <SliderSkeleton />;
  }

  return (
    <CfSlider
      internalTitle={data.internalTitle}
      slides={data.slidesCollection?.items}
      __typename={data.__typename}
      lang={lang}
      id={id}
      preview={preview}
    />
  );
};
