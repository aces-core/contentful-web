import type { CfFetchById } from "@aces/types";

import { CfTeamListing } from "./render";
import { fetchTeamListingData } from "./services";
import { TeamListingSkeleton } from "./skeleton";

export interface CfTeamListingServerProps extends CfFetchById {}

export const CfTeamListingServer = async ({
  id,
  preview,
  lang,
}: CfTeamListingServerProps) => {
  let data;

  try {
    data = await fetchTeamListingData(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <TeamListingSkeleton />;
  }

  if (!data) {
    return <TeamListingSkeleton />;
  }

  return (
    <CfTeamListing
      internalTitle={data.internalTitle}
      headline={data.headline}
      teamMembersCollection={data.teamMembersCollection}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
