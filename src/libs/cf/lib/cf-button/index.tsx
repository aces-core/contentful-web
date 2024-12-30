import type { CfFetchById } from "@maverick/types";

import { CfButton } from "./render";
import { fetchButton } from "./services";
import { ButtonSkeleton } from "./skeleton";

export const CfButtonServer = async ({ id, preview, lang }: CfFetchById) => {
  let data;

  try {
    data = await fetchButton(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <ButtonSkeleton />;
  }

  if (!data) {
    return <ButtonSkeleton />;
  }

  return (
    <CfButton
      internalTitle={data.internalTitle}
      title={data.title}
      link={data.link}
      buttonStyle={data.buttonStyle}
      rightIcon={data.rightIcon}
      fullWidthMobile={data.fullWidthMobile}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
