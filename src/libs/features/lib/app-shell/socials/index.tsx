import type { CfFetchById } from "@aces/types";

import { Socials } from "./render";
import { fetchSocialsData } from "./services";
import { SocialsSkeleton } from "./skeleton";

export interface SocialsServerProps extends CfFetchById {}

export const SocialsServer = async ({
  id,
  preview,
  lang,
}: SocialsServerProps) => {
  let data;

  try {
    data = await fetchSocialsData(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <SocialsSkeleton />;
  }

  if (!data) {
    return <SocialsSkeleton />;
  }

  return (
    <Socials
      facebook={data.facebook}
      xTwitter={data.xTwitter}
      instagram={data.instagram}
      linkedin={data.linkedin}
      youtube={data.youtube}
    />
  );
};
