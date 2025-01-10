import type { CfFetchById } from "@maverick/types";

import { CfTextLink } from "./render";
import { fetchLinkTextData } from "./services";
import { LinkSkeleton } from "./skeleton";

export const CfLinkTextServer = async ({ id, preview, lang }: CfFetchById) => {
  let data;

  try {
    data = await fetchLinkTextData(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <LinkSkeleton />;
  }

  if (!data) {
    return <LinkSkeleton />;
  }

  return (
    <CfTextLink
      internalTitle={data.internalTitle}
      link={data.link}
      title={data.title}
      __typename={data.__typename}
      id={data.sys.id}
      lang={lang}
      preview={preview}
    />
  );
};
