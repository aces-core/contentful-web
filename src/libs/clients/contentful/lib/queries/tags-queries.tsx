import { gql } from "@apollo/client";
import { ImageFragment } from "./component-queries";

export const TeamMemberFragment = gql`
  ${ImageFragment}

  fragment TeamMember on TeamMember {
    name
    role
    description
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
