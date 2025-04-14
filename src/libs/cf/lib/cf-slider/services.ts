import { gql } from "@apollo/client";

import { cfClient, cfPreviewClient, ImageFragment } from "@aces/contentful";
import { defaultLocale } from "@aces/i18n";
import { LockupFragement } from "../cf-lockup/services";
import { RichTextSectionFragment } from "../cf-rich-text-section/services";

export const SliderQuery = gql`
  ${LockupFragement}
  ${ImageFragment}
  ${RichTextSectionFragment}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    slider(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      slidesCollection(limit: 10) {
        items {
          ...Lockup
          ...Image
          ...RichTextSection
        }
      }
      sys {
        id
      }
    }
  }
`;
export const fetchSlider = async (
  id: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: SliderQuery,
      variables: { id, preview, locale },
    });

    return response.data.slider;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
