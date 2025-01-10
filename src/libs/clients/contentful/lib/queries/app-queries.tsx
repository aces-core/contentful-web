import { gql } from "@apollo/client";

export const AppQuery = gql`
  query ($id: String!, $preview: Boolean!) {
    appsCollection(where: { appId: $id }, limit: 1, preview: $preview) {
      items {
        appName
        appId
        copyrightText
      }
    }
  }
`;
