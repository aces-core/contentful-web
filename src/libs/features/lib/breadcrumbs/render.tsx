import React from "react";

import { defaultLocale, getLocale, Locale } from "@aces/i18n";
import { RouteDirectory } from "@aces/types";
import { palette, typography } from "@aces/theme";
import { Breadcrumbs, InlineBox, Link } from "@aces/ui";

interface PageBreadcrumb {
  children: React.ReactNode;
  disable?: boolean;
}

const PageBreadcrumb = ({ children, disable }: PageBreadcrumb) => {
  return (
    <InlineBox
      style={{
        fontSize: typography.caption.fontSize,
        color: disable ? palette.grey[500] : palette.primary.main,
        pointerEvents: disable ? "none" : "cursor",
        "& a": {
          textDecoration: disable ? "none" : "underline",
        },
      }}
    >
      {children}
    </InlineBox>
  );
};

export interface PageBreadcrumbsProps {
  showHome?: boolean;
  lang: Locale;
}

export const ArticlesPageBreadcrumbs = async ({
  showHome = true,
  lang = defaultLocale,
}: PageBreadcrumbsProps) => {
  const t = await getLocale(lang, "common");

  return (
    <Breadcrumbs>
      {showHome && (
        <PageBreadcrumb>
          <Link href={RouteDirectory.Homepage}>{t.breadcrumbs.home}</Link>
        </PageBreadcrumb>
      )}
      <PageBreadcrumb disable>
        <Link href={RouteDirectory.Articles} aria-current="page">
          {t.breadcrumbs.articles}
        </Link>
      </PageBreadcrumb>
    </Breadcrumbs>
  );
};

interface ArticlePageBreadcrumbsProps extends PageBreadcrumbsProps {
  article: {
    slug: string;
    title: string;
  };
}

export const ArticlePageBreadcrumbs = async ({
  article,
  showHome = true,
  lang = defaultLocale,
}: ArticlePageBreadcrumbsProps) => {
  const t = await getLocale(lang, "common");

  return (
    <Breadcrumbs marginY={7}>
      {showHome && (
        <PageBreadcrumb>
          <Link href={RouteDirectory.Homepage}>{t.breadcrumbs.home}</Link>
        </PageBreadcrumb>
      )}
      <PageBreadcrumb>
        <Link href={RouteDirectory.Articles} aria-current="page">
          {t.breadcrumbs.articles}
        </Link>
      </PageBreadcrumb>
      <PageBreadcrumb disable>
        <Link href={`${RouteDirectory.Articles}/${article.slug}`}>
          {article.title}
        </Link>
      </PageBreadcrumb>
    </Breadcrumbs>
  );
};

export const SearchPageBreadcrumbs = async ({
  showHome = true,
  lang = defaultLocale,
}: PageBreadcrumbsProps) => {
  const t = await getLocale(lang, "common");

  return (
    <Breadcrumbs>
      {showHome && (
        <PageBreadcrumb>
          <Link href={RouteDirectory.Homepage}>{t.breadcrumbs.home}</Link>
        </PageBreadcrumb>
      )}
      <PageBreadcrumb disable>
        <Link href={RouteDirectory.Search} aria-current="page">
          {t.breadcrumbs.search}
        </Link>
      </PageBreadcrumb>
    </Breadcrumbs>
  );
};
