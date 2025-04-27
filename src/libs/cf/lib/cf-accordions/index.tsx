import type { CfFetchById, Nested } from "@aces/types";

import { CfAccordions } from "./render";
import { fetchAccordionsData } from "./services";
import { AccordionsSkeleton } from "./skeleton";

export interface CfAccordionsServerProps extends CfFetchById, Nested {}

export const CfAccordionsServer = async ({
  id,
  preview,
  lang,
  nested,
}: CfAccordionsServerProps) => {
  let data;

  try {
    data = await fetchAccordionsData(id, preview, lang);
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
      nested={nested}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
