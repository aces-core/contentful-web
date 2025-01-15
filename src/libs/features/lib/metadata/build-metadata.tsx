import type { Metadata } from "next";

import { defaultLocale, type Locale } from "@maverick/i18n";

type CfSocialImage = {
  fields: {
    file: {
      [key: Locale]: {
        url: string;
        details: {
          image: {
            width: number;
            height: number;
            type: string;
          };
        };
        contentType?: string;
      };
    };
  };
};

export interface CfSeoData {
  metaTitle: string;
  metaDescription: string;
  socialTitle?: string;
  socialDescription?: string;
  socialImage?: CfSocialImage;
  searchEngineVisibility?: string;
  index?: string;
  canonicalUrl?: string;
  schema?: object;
  keywords?: string[];
}

interface BuildMetadataOptions {
  titleAbsolute?: boolean;
  alternates?: Metadata["alternates"];
}

export async function buildMetadata(
  seo: CfSeoData,
  options: BuildMetadataOptions,
): Promise<Metadata> {
  const isNoFollow = seo.searchEngineVisibility === "nofollow";
  const isNoIndex = seo.index === "noindex";

  const title = options.titleAbsolute
    ? {
        absolute: seo.metaTitle,
      }
    : seo.metaTitle;
  const socialTitle = seo.socialTitle ? seo.socialTitle : seo.metaTitle;
  const socialDescription = seo.socialDescription
    ? seo.socialDescription
    : seo.metaDescription;
  const socialImage = seo.socialImage
    ? {
        url: `https://${seo.socialImage.fields.file[defaultLocale].url}`,
        width: seo.socialImage.fields.file[defaultLocale].details.image.width,
        height: seo.socialImage.fields.file[defaultLocale].details.image.height,
        type: seo.socialImage.fields.file[defaultLocale].contentType,
      }
    : {
        url: "/images/og-image.jpg",
        width: 2400,
        height: 1600,
        type: "image/jpeg",
      };

  return {
    title: title,
    description: seo.metaDescription,
    ...(seo.keywords && { keywords: seo.keywords.join(", ") }),
    openGraph: {
      title: socialTitle,
      description: socialDescription,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: [socialImage],
    },
    ...(seo.schema && { schema: seo.schema }),
    robots: {
      follow: !isNoFollow,
      index: !isNoIndex,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    alternates: {
      ...(seo.canonicalUrl && { canonical: seo.canonicalUrl }),
      ...options.alternates,
    },
  };
}
