export const generateId = (title: string) => title.replace(/\s+/g, "");

export const sliceSlug = (route: string[]) => route.slice(-1)[0];

export const flattenObjectArray = (items: [], key: string) => {
  return items.map((item) => item[key]).filter((value) => value !== undefined);
};
