import { CfBaseComponent } from "@maverick/types";

export interface PageBodyItem extends CfBaseComponent {}

export type PageBodyItems = PageBodyItem[];

export interface PageBodyProps
  extends Pick<CfBaseComponent, "preview" | "lang"> {
  items: PageBodyItems;
}
