import { gql } from "@apollo/client";

export const DefaultPageBodyQuery = gql`
  query ($id: String!, $preview: Boolean!, $locale: String) {
    page(id: $id, preview: $preview, locale: $locale) {
      pageBodyCollection {
        items {
          ... on Accordions {
            sys {
              id
            }
          }
          ... on Banner {
            sys {
              id
            }
          }
          ... on CardSlider {
            sys {
              id
            }
          }
          ... on Header {
            sys {
              id
            }
          }
          ... on Image {
            sys {
              id
            }
          }
          ... on Lockup {
            sys {
              id
            }
          }
          ... on RichTextSection {
            sys {
              id
            }
          }
          ... on VideoEmbed {
            sys {
              id
            }
          }
          __typename
        }
      }
    }
  }
`;

export const DefaultPageHeroQuery = gql`
  query ($id: String!, $preview: Boolean!, $locale: String) {
    page(id: $id, preview: $preview, locale: $locale) {
      pageHero {
        ... on ImageOverlayHero {
          sys {
            id
          }
        }
      }
    }
  }
`;

export const PageQuery = gql`
  query ($slug: String!, $preview: Boolean!, $locale: String) {
    pageCollection(
      where: { slug: $slug }
      limit: 1
      preview: $preview
      locale: $locale
    ) {
      items {
        title
        slug
        specialtyPage
        seo
        sys {
          id
        }
      }
    }
  }
`;

export const SpecialtyPageQuery = gql`
  query ($specialtyPage: String!, $preview: Boolean!, $locale: String) {
    pageCollection(
      where: { specialtyPage: $specialtyPage }
      limit: 1
      preview: $preview
      locale: $locale
    ) {
      items {
        title
        slug
        seo
        sys {
          id
        }
      }
    }
  }
`;
