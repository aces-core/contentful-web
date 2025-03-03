import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const uri = `${process.env.NEXT_PUBLIC_CF_GRAPHQL_URL}/${process.env.NEXT_PUBLIC_CF_SPACE}/environments/${process.env.NEXT_PUBLIC_CF_ENVIRONMENT}`;

const createClient = (preview = false) => {
  const accessToken = preview
    ? process.env.NEXT_PUBLIC_CF_PREVIEW_ACCESS_TOKEN
    : process.env.NEXT_PUBLIC_CF_ACCESS_TOKEN;

  const httpLink = new HttpLink({
    uri: uri,
    headers: {
      "Cache-Control": "no-cache",
      "content-type": "application/json",
      authorization: `Bearer ${accessToken}`,
    },
  });

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    uri: uri,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "no-cache",
        errorPolicy: "ignore",
      },
      query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
      },
      mutate: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
      },
    },
  });
};

export const cfClient = createClient();
export const cfPreviewClient = createClient(true);
