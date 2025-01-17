export const ArticlesLimit = 10;

export type OrderByTypes = "ASC" | "DESC";

export type OrderSelectValueTypes = "date" | "title";

export enum OrderTypes {
  AlphaASC = "title_ASC",
  AlphaDESC = "title_DESC",
  DateASC = "publishDate_ASC",
  DateDESC = "publishDate_DESC",
}

export const DefaultOrder = OrderTypes.DateDESC;

export enum Query {
  categories = "categories",
  order = "order",
}
