import { Locale } from "@aces/i18n";
import { CfImageProps, CfRichText } from "@aces/types";

export interface ArticleCardProps {
  featuredImage: CfImageProps;
  publishDate: string;
  title: string;
  slug: string;
  excerpt: string;
  bodyCopy: CfRichText;
  lang: Locale;
  preview: boolean;
}
