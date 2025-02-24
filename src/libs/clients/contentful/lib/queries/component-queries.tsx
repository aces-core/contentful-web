import { gql } from "@apollo/client";

export const EntryQuery = gql`
  query ($id: String!, $preview: Boolean!, $locale: String!) {
    entryCollection(
      where: { sys: { id: $id } }
      limit: 1
      preview: $preview
      locale: $locale
    ) {
      items {
        sys {
          id
        }
        __typename
      }
    }
  }
`;

export const PageLinkFragment = gql`
  fragment PageLink on Page {
    slug
  }
`;

export const LinkFragment = gql`
  ${PageLinkFragment}

  fragment Link on Link {
    internalTitle
    linkType
    pageLink {
      ...PageLink
    }
    customLink
    target
  }
`;

export const ButtonFragment = gql`
  ${LinkFragment}

  fragment Button on Button {
    internalTitle
    title
    link {
      ...Link
    }
    buttonStyle
    sys {
      id
    }
    __typename
  }
`;

export const HubSpotFormFragment = gql`
  fragment HubSpotForm on HubSpotForm {
    hsPortalId
    hsFormId
    sys {
      id
    }
  }
`;

export const PardotFormFragment = gql`
  fragment PardotForm on PardotForm {
    pardotFormUrl
    sys {
      id
    }
  }
`;

export const ImageFragment = gql`
  fragment Image on Image {
    internalTitle
    image {
      url
      width
      height
    }
    altText
    sys {
      id
    }
    __typename
  }
`;

export const ModalFragment = gql`
  fragment Modal on Modal {
    sys {
      id
    }
    internalTitle
    modalHeadline
    modalSubhead
    modalBodyCollection {
      items {
        ... on Accordions {
          internalTitle
          accordionsCollection {
            items {
              internalTitle
              headline
              bodyCopy {
                json
              }
            }
          }
          sys {
            id
          }
        }
      }
    }
    __typename
  }
`;
