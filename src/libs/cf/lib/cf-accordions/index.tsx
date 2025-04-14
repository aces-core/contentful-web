import type { CfFetchById } from "@aces/types";

import { CfAccordions } from "./render";
import { fetchAccordionsData } from "./services";
import { AccordionsSkeleton } from "./skeleton";

export const CfAccordionsServer = async ({
  id,
  preview,
  lang,
}: CfFetchById) => {
  let data;

  try {
    data = await fetchAccordionsData(id, preview);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <AccordionsSkeleton />;
  }

  if (!data) {
    return <AccordionsSkeleton />;
  }

  return (
    <CfAccordions
      internalTitle={data.internalTitle}
      headline={data.headline}
      bodyCopy={data.bodyCopy}
      accordionsCollection={data.accordionsCollection}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
