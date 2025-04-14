import type { CfFetchById } from "@aces/types";

import { CfLink } from "./render";
import { fetchLinkData } from "./services";
import { LinkSkeleton } from "./skeleton";

export interface CfLinkServerProps extends CfFetchById {
  children?: React.ReactNode;
}

export const CfLinkServer = async ({
  id,
  preview,
  lang,
  children,
}: CfLinkServerProps) => {
  let data;

  try {
    data = await fetchLinkData(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <LinkSkeleton />;
  }

  if (!data) {
    return <LinkSkeleton />;
  }

  return (
    <CfLink
      linkType={data.linkType}
      pageLink={data.pageLink}
      customLink={data.customLink}
      target={data.target}
      lang={lang}
    >
      {children}
    </CfLink>
  );
};
