import type { CfFetchById } from "@aces/types";

import { CfCard } from "./render";
import { fetchCardData } from "./services";
import { CardSkeleton } from "./skeleton";

interface CfCardServerProps extends CfFetchById {
  fullHeight?: boolean;
}

export const CfCardServer = async ({
  id,
  preview,
  lang,
  fullHeight,
}: CfCardServerProps) => {
  let data;

  try {
    data = await fetchCardData(id, preview);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <CardSkeleton />;
  }

  if (!data) {
    return <CardSkeleton />;
  }

  return (
    <CfCard
      internalTitle={data.internalTitle}
      cardType={data.cardType}
      headline={data.headline}
      bodyCopy={data.bodyCopy}
      image={data.image}
      imageSize={data.imageSize}
      fullHeight={fullHeight}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
