import type { CfFetchById } from "@aces/types";

import { CfForm } from "./render";
import { fetchFormData } from "./services";
import { CfFormSkeleton } from "./skeleton";

export interface CfFormServerProps extends CfFetchById {}

export const CfFormServer = async ({
  id,
  preview,
  lang,
}: CfFormServerProps) => {
  let data;

  try {
    data = await fetchFormData(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <CfFormSkeleton />;
  }

  if (!data) {
    return <CfFormSkeleton />;
  }

  return (
    <CfForm
      internalTitle={data.internalTitle}
      form={data.form}
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
