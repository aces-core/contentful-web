import { gql } from "@apollo/client";

import { ImageFragment } from "./component-queries";

export const TestimonialFragment = gql`
  ${ImageFragment}

  fragment Testimonial on Testimonial {
    name
    role
    description {
      json
    }
    profileImage {
      ...Image
    }
  }
`;

export const TeamMemberFragment = gql`
  ${ImageFragment}

  fragment TeamMember on TeamMember {
    name
    role
    description
    bio {
      json
    }
    profileImage {
      ...Image
    }
  }
`;

export const CategoriesFragment = gql`
  fragment Categories on Categories {
    title
    slug
  }
`;

export const AllCategoriesQuery = gql`
  ${CategoriesFragment}

  query ($preview: Boolean!, $locale: String!) {
    categoriesCollection(preview: $preview, locale: $locale) {
      items {
        ...Categories
        linkedFrom {
          articleCollection {
            total
          }
        }
      }
    }
  }
`;
