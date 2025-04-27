import type { CfFetchById } from "@aces/types";

import { CfTestimonials } from "./render";
import { fetchTestimonialsData } from "./services";
import { TestimonialsSkeleton } from "./skeleton";

export interface CfTestimonialsServerProps extends CfFetchById {}

export const CfTestimonialsServer = async ({
  id,
  preview,
  lang,
}: CfTestimonialsServerProps) => {
  let data;

  try {
    data = await fetchTestimonialsData(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <TestimonialsSkeleton />;
  }

  if (!data) {
    return <TestimonialsSkeleton />;
  }

  return (
    <CfTestimonials
      internalTitle={data.internalTitle}
      headline={data.headline}
      testimonials={data.testimonialsCollection?.items}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
