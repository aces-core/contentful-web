import { gql } from "@apollo/client";
import { ImageFragment } from "@aces/contentful";

export const ArticleCardFragment = gql`
  ${ImageFragment}

  fragment ArticleCard on Article {
    title
    slug
    publishDate
    excerpt
    bodyCopy {
      json
    }
    featuredImage {
      ...Image
    }
    sys {
      id
    }
  }
`;
