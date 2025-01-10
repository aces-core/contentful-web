import type { Metadata } from "next";

type CfSocialImage = {
  fields: {
    file: {
      url: string;
    };
  };
};

export interface CfSeoValues {
  metaTitle: string;
  metaDescription?: string;
  socialTitle?: string;
  socialDescription?: string;
  socialImage?: CfSocialImage;
  searchEngineVisibility?: string;
  index?: string;
  canonicalUrl?: string;
  schema?: object;
  keywords?: string[];
}

export async function CfGenerateSeo(
  seo: CfSeoValues,
  pageTitle: string,
  siteTitle?: string,
): Promise<Metadata> {
  const isNoFollow = seo.searchEngineVisibility === "nofollow";
  const isNoIndex = seo.index === "noindex";

  return {
    title: `${seo.metaTitle ? seo.metaTitle : pageTitle}${
      siteTitle ? ` | ${siteTitle}` : ""
    }`,
    description: seo.metaDescription,
    keywords: seo.keywords?.join(", "),
    openGraph: {
      title: seo.socialTitle ? seo.socialTitle : seo.metaTitle,
      description: seo.socialDescription
        ? seo.socialDescription
        : seo.metaDescription,
      images: [
        {
          url: seo.socialImage?.fields.file.url || "",
        },
      ],
    },
    ...(seo.schema && { schema: seo.schema }),
    robots: `${isNoIndex ? "noindex" : "index"}, ${isNoFollow ? "nofollow" : "follow"}`,
    alternates: {
      canonical: seo.canonicalUrl,
    },
  };
}
