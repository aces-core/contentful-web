import { cookies, draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { gql } from "@apollo/client";

import { cfClient, cfPreviewClient } from "@aces/contentful";
import { defaultLocale } from "@aces/i18n";
import { RouteDirectory } from "@aces/types";

const ArticleQuery = gql`
  query ($slug: String!, $preview: Boolean!, $locale: String!) {
    articleCollection(
      where: { slug: $slug }
      limit: 1
      preview: $preview
      locale: $locale
    ) {
      items {
        slug
        sys {
          id
        }
      }
    }
  }
`;

const fetchArticleData = async (
  slug: string,
  preview = true,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const pageResponse = await client.query({
      query: ArticleQuery,
      variables: { slug, preview, locale },
    });

    return pageResponse.data.articleCollection.items;
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
};

export async function GET(request: Request) {
  const draft = await draftMode();

  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");
  const locale = searchParams.get("locale");

  if (secret !== process.env.NEXT_PUBLIC_CF_PREVIEW_SECRET || !slug) {
    return new Response("Invalid token", { status: 401 });
  }

  if (!locale) {
    return new Response("Invalid locale", { status: 401 });
  }

  const pageData = await fetchArticleData(slug, true, locale);

  if (!pageData[0]) {
    return new Response("Invalid slug", { status: 401 });
  }

  draft.enable();

  const cookieStore = await cookies();
  const cookie = cookieStore.get("__prerender_bypass")!;
  cookieStore.set({
    name: "__prerender_bypass",
    value: cookie?.value,
    httpOnly: true,
    path: "/",
    secure: true,
    sameSite: "none",
  });

  redirect(`${RouteDirectory.Articles}/${slug}`);
}
