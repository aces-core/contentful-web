export type OrderByTypes = "ASC" | "DESC";

export type OrderSelectValueTypes = "date" | "title";

export enum OrderTypes {
  AlphaASC = "title_ASC",
  AlphaDESC = "title_DESC",
  DateASC = "publishDate_ASC",
  DateDESC = "publishDate_DESC",
}

export enum Query {
  categories = "categories",
  order = "order",
}

export const ArticleListingConfig = {
  ArticlesLimit: 16,
  DefaultOrder: OrderTypes.DateDESC,
};
