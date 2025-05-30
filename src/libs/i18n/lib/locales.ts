export const locales = [
  { locale: "en-US", trans: "en-US", label: "English" },
  { locale: "es", trans: "es", label: "Spanish" },
];

export const defaultLocale = "en-US";

export type Locale = (typeof locales)[number]["locale"];
