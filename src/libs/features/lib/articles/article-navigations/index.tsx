import { defaultLocale, getLocale, Locale } from "@aces/i18n";
import { RouteDirectory } from "@aces/types";
import { Icon, Link } from "@aces/ui";

interface ArticleNavigations {
  showIcon?: boolean;
  lang: Locale;
}

export const BackToArticleListing = async ({
  showIcon = true,
  lang = defaultLocale,
}: ArticleNavigations) => {
  const t = await getLocale(lang, "common");

  return (
    <Link href={RouteDirectory.Articles} color="primary">
      {showIcon && <Icon icon="ChevronLeft" />}
      {t.postType.backToArticleListing}
    </Link>
  );
};
