import { redirect } from "next/navigation";

import { RouteDirectory, SpecialtyPages } from "@maverick/types";

export const specialtyPageRedirect = (specialtyPage: string) => {
  if (specialtyPage) {
    switch (specialtyPage) {
      case SpecialtyPages.Homepage:
        redirect(RouteDirectory.Homepage);
      default:
        break;
    }
  }
};
