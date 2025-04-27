import { gql } from "@apollo/client";

import { defaultLocale } from "@aces/i18n";
import {
  cfClient,
  cfPreviewClient,
  PardotFormFragment,
} from "@aces/contentful";
import { RichTextSectionFragment } from "../cf-rich-text-section/services";

export const ModalQuery = gql`
  ${PardotFormFragment}
  ${RichTextSectionFragment}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    modal(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      modalHeader
      modalBodyCollection {
        items {
          ...PardotForm
          ...RichTextSection
        }
      }
      sys {
        id
      }
    }
  }
`;

export const fetchModalData = async (
  id: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: ModalQuery,
      variables: { id, preview, locale },
    });

    return response.data.modal;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
