import type { CfFetchById } from "@aces/types";
import { fetchPardotFormData } from "./services";
import { PardotForm } from ".";

export const PardotFormServer = async ({ id, preview, lang }: CfFetchById) => {
  let data;

  try {
    data = await fetchPardotFormData(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <></>;
  }

  if (!data) {
    return <></>;
  }

  return (
    <PardotForm
      internalTitle={data.internalTitle}
      pardotFormUrl={data.pardotFormUrl}
      __typename={data.__typename}
    />
  );
};
