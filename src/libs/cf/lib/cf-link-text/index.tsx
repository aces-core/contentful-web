import type { CfFetchById } from "@aces/types";

import { CfTextLink } from "./render";
import { fetchLinkTextData } from "./services";
import { LinkTextSkeleton } from "./skeleton";

export interface CfLinkTextServerProps extends CfFetchById {
  alignment?: string;
}

export const CfLinkTextServer = async ({
  id,
  preview,
  lang,
  alignment,
}: CfLinkTextServerProps) => {
  let data;

  try {
    data = await fetchLinkTextData(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <LinkTextSkeleton />;
  }

  if (!data) {
    return <LinkTextSkeleton />;
  }

  return (
    <CfTextLink
      internalTitle={data.internalTitle}
      link={data.link}
      title={data.title}
      externalLinkIcon={data.externalLinkIcon}
      __typename={data.__typename}
      alignment={alignment}
      id={data.sys.id}
      lang={lang}
      preview={preview}
    />
  );
};
