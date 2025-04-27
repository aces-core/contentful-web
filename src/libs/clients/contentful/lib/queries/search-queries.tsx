import { gql } from "@apollo/client";

export const PageSearchResultFragment = gql`
  fragment PageSearchResult on Page {
    title: title
    seo: seo
    keywords: searchKeywords
    slug: slug
    parentPage {
      slug
      specialtyPage
    }
    specialtyPage
    sys {
      id
    }
  }
`;

export const ArticleSearchResultFragment = gql`
  fragment ArticleSearchResult on Article {
    title: title
    excerpt: excerpt
    keywords: searchKeywords
    slug: slug
    sys {
      id
    }
  }
`;

export const TopSearchResultsQuery = gql`
  ${PageSearchResultFragment}
  ${ArticleSearchResultFragment}

  query ($query: String!, $limit: Int!, $preview: Boolean!, $locale: String!) {
    pageCollection(
      where: {
        OR: [
          { title_contains: $query }
          { searchKeywords_contains_some: [$query] }
        ]
      }
      limit: $limit
      preview: $preview
      locale: $locale
    ) {
      items {
        ...PageSearchResult
      }
    }
    articleCollection(
      where: {
        OR: [
          { title_contains: $query }
          { excerpt_contains: $query }
          { searchKeywords_contains_some: [$query] }
        ]
      }
      limit: $limit
      preview: $preview
      locale: $locale
    ) {
      items {
        ...ArticleSearchResult
      }
    }
  }
`;

export const SearchPagesQuery = gql`
  ${PageSearchResultFragment}

  query (
    $query: String!
    $limit: Int!
    $offset: Int!
    $preview: Boolean!
    $locale: String!
  ) {
    pageCollection(
      where: {
        OR: [
          { title_contains: $query }
          { searchKeywords_contains_some: [$query] }
        ]
      }
      limit: $limit
      skip: $offset
      preview: $preview
      locale: $locale
    ) {
      items {
        ...PageSearchResult
      }
      total
    }
  }
`;

export const SearchArticlesQuery = gql`
  ${ArticleSearchResultFragment}

  query (
    $query: String!
    $limit: Int!
    $offset: Int!
    $preview: Boolean!
    $locale: String!
  ) {
    articleCollection(
      where: {
        OR: [
          { title_contains: $query }
          { excerpt_contains: $query }
          { searchKeywords_contains_some: [$query] }
        ]
      }
      limit: $limit
      skip: $offset
      preview: $preview
      locale: $locale
    ) {
      items {
        ...ArticleSearchResult
      }
      total
    }
  }
`;
