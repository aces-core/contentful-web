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
    specialtyPage
    parentPage {
      slug
      specialtyPage
    }
  }
`;

export const ArticleLinkFragment = gql`
  fragment ArticleLink on Article {
    slug
  }
`;

export const PdfLinkFragment = gql`
  fragment PdfLink on PdfDocument {
    slug
  }
`;

export const LinkFragment = gql`
  ${PageLinkFragment}
  ${ArticleLinkFragment}
  ${PdfLinkFragment}

  fragment Link on Link {
    internalTitle
    linkType
    pageLink {
      ...PageLink
      ...ArticleLink
      ...PdfLink
    }
    customLink
    target
  }
`;

export const ModalIdFragment = gql`
  fragment Modal on Modal {
    internalTitle
    sys {
      id
    }
  }
`;

export const ButtonFragment = gql`
  ${LinkFragment}
  ${ModalIdFragment}

  fragment Button on Button {
    internalTitle
    title
    link {
      ...Link
      ...Modal
    }
    buttonStyle
    rightIcon
    sys {
      id
    }
    __typename
  }
`;

export const HubSpotFormFragment = gql`
  fragment HubSpotForm on HubSpotForm {
    internalTitle
    hsPortalId
    hsFormId
    sys {
      id
    }
  }
`;

export const PardotFormFragment = gql`
  fragment PardotForm on PardotForm {
    internalTitle
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
    nativeImageSize
    sys {
      id
    }
    __typename
  }
`;

export const OfferingItemFragment = gql`
  fragment OfferingItem on OfferingItem {
    internalTitle
    icon
    headline
    bodyCopy {
      json
    }
    sys {
      id
    }
  }
`;
