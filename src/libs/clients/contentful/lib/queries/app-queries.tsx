import { gql } from "@apollo/client";

export const appQuery = gql`
  query ($id: String!, $preview: Boolean!) {
    appsCollection(where: { appId: $id }, limit: 1, preview: $preview) {
      items {
        appName
        appId
        brand {
          sys {
            id
          }
        }
        storefrontNotification {
          sys {
            id
          }
        }
        copyrightText
      }
    }
  }
`;
