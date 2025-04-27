export const GlobalSearchQuery = "q";
export const SearchContentTypeQuery = "contentType";

export enum SearchableContentTypes {
  Pages = "pages",
  Articles = "articles",
}

export const SearchConfig: {
  TopResultsLimits: 1 | 2;
  ListingLimit: number;
  DefaultSearchContentType: SearchableContentTypes;
} = {
  TopResultsLimits: 1,
  ListingLimit: 5,
  DefaultSearchContentType: SearchableContentTypes.Pages,
};
