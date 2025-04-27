// Enable/Disable Features

export const EnableArticles = true;

type FilterTypes = "select" | "toggle" | false;

interface ArticleFeaturesType {
  ShowFilters: FilterTypes;
  ShowSort: boolean;
  ShowArticleCategoryTags: boolean;
  ShowListingTitle: boolean;
  ShowSocialShare: boolean;
  ShowDisplayTypes: boolean;
}

export const ArticleFeatures: ArticleFeaturesType = {
  ShowFilters: "toggle",
  ShowSort: false,
  ShowDisplayTypes: true,
  ShowListingTitle: true,
  ShowArticleCategoryTags: false,
  ShowSocialShare: true,
};

export const EnableSearch = true;

export const PaginationUrlParam = "page";
