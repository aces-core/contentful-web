import { Locale } from "@aces/i18n";

export interface CatchAllPageProps {
  lang: Locale;
  slug: string[];
}

export interface PageProps {
  lang: Locale;
  slug: string;
}

export enum SpecialtyPages {
  Homepage = "Homepage",
  Articles = "Articles",
}

export enum RouteDirectory {
  Homepage = "/",
  Articles = "/articles",
  Search = "/search",
  PDF = "/api/pdf",
}

export type PageLinkTypes = "Page" | "Article" | "PdfDocument";

export interface PageLinkProps {
  slug: string;
  specialtyPage?: SpecialtyPages;
  parentPage?: {
    slug: string;
    specialtyPage?: SpecialtyPages;
  };
  __typename: PageLinkTypes;
}
