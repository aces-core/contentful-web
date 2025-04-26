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
}

export type PageLinkTypes = "Page" | "Article";

export interface PageLinkProps {
  slug: string;
  specialtyPage?: SpecialtyPages.Homepage;
  parentPage?: {
    slug: string;
    specialtyPage?: SpecialtyPages.Homepage;
  };
  __typename: PageLinkTypes;
}
