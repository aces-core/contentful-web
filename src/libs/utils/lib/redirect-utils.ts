import { redirect } from "next/navigation";

import { RouteDirectory, SpecialtyPages } from "@aces/types";
import { EnableArticles } from "@aces/features";

export const specialtyPageRedirect = (specialtyPage: string) => {
  if (specialtyPage) {
    switch (specialtyPage) {
      case SpecialtyPages.Homepage:
        redirect(RouteDirectory.Homepage);
      case SpecialtyPages.Articles:
        if (EnableArticles) {
          redirect(RouteDirectory.Articles);
        }
      default:
        break;
    }
  }
};
