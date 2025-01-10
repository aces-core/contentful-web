export const locales = [{ locale: "en-US", trans: "en-US", label: "English" }];

export const defaultLocale = "en-US";

export type Locale = (typeof locales)[number]["locale"];
