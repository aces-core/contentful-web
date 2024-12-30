import { gql } from "@apollo/client";

export const LandingPageLinkFragment = gql`
  fragment LandingPageLink on LandingPage {
    slug
  }
`;

export const LinkFragment = gql`
  ${LandingPageLinkFragment}

  fragment Link on Link {
    internalName
    linkType
    pageLink {
      ...LandingPageLink
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
