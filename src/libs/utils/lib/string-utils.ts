export const generateId = (title: string) => title.replace(/\s+/g, "");

export const sliceSlug = (route: string[]) => route.slice(-1)[0];
