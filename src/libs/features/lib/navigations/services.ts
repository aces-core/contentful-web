import { gql } from "@apollo/client";

import { cfClient, cfPreviewClient, LinkFragment } from "@maverick/contentful";

export const MenuItemFragment = gql`
  ${LinkFragment}

  fragment MenuItem on MenuItem {
    internalTitle
    title
    link {
      ...Link
    }
    sys {
      id
    }
  }
`;

export const DropdownMenuFragment = gql`
  ${MenuItemFragment}

  fragment DropdownMenu on DropdownMenu {
    internalTitle
    title
    menuItemsCollection(limit: 8) {
      items {
        ...MenuItem
      }
    }
    sys {
      id
    }
  }
`;

export const NavigationsQuery = gql`
  ${MenuItemFragment}
  ${DropdownMenuFragment}

  query ($id: String!, $preview: Boolean!, $lang: String!) {
    appsCollection(
      where: { appId: $id }
      limit: 1
      preview: $preview
      locale: $lang
    ) {
      items {
        mainNavigationCollection(limit: 8) {
          items {
            ...MenuItem
            ...DropdownMenu
          }
        }
      }
    }
  }
`;

export const fetchNavigationsData = async (
  id: string,
  preview: boolean,
  lang: string,
) => {
  const client = preview ? cfPreviewClient : cfClient;

  try {
    const response = await client.query({
      query: NavigationsQuery,
      variables: { id, preview, lang },
    });

    return {
      mainNavigations:
        response.data.appsCollection.items[0].mainNavigationCollection.items,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
