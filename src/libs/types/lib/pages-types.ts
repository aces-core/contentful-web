import { Locale } from "@maverick/i18n";

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
}

export enum RouteDirectory {
  Homepage = "/",
  Articles = "/articles",
}

export interface PageLinkProps {
  slug: string;
  specialtyPage?: SpecialtyPages.Homepage;
  parentPage?: {
    slug: string;
    specialtyPage?: SpecialtyPages.Homepage;
  };
}
