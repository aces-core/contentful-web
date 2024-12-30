export interface PageProps {
  params: {
    lang: string;
    slug: string;
  };
}

export enum SpecialtyPages {
  Homepage = "Homepage",
}

export enum RouteDirectory {
  Homepage = "/",
}

export interface PageLinkProps {
  slug: string;
  specialtyPage?: SpecialtyPages.Homepage;
  parentPage?: {
    slug: string;
    specialtyPage?: SpecialtyPages.Homepage;
  };
}
