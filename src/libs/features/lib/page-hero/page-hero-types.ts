import { CfBaseComponent } from "@aces/types";

export interface PageHeroItem extends CfBaseComponent {}

export interface PageHeroProps
  extends Pick<CfBaseComponent, "preview" | "lang"> {
  item: PageHeroItem;
}
