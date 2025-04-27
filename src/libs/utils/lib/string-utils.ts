export const generateId = (title: string) => title.replace(/\s+/g, "");

export const sliceSlug = (route: string[]) => route.slice(-1)[0];

export const flattenObjectArray = (items: [], key: string) => {
  return items.map((item) => item[key]).filter((value) => value !== undefined);
};

export const toSingleValueArray = (
  value: string | any[] | null | undefined,
): any[] => {
  if (Array.isArray(value)) {
    return value;
  }
  if (value == null) {
    return [];
  }
  return [value];
};

export const slugToString = (slug: string) => {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char);
};

export const truncate = (str: string, wordCount: number) => {
  const words = str.split(" ");
  return words.length > wordCount
    ? words.slice(0, wordCount).join(" ") + "..."
    : str;
};
