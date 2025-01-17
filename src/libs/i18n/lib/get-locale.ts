import { locales } from "./locales";

type Locale = string;
export type TranslationSection = string;

const normalizeLocale = (locale: string): string => {
  return locale.replace("-", "");
};

const generateTranslations = () => {
  const translations: Record<
    Locale,
    Record<TranslationSection, () => Promise<any>>
  > = {};

  locales.forEach(({ locale, trans }) => {
    const normalizedLocale = normalizeLocale(locale);
    translations[normalizedLocale] = {
      common: () =>
        import(`../locale/${trans}/common.json`).then(
          (module) => module.default,
        ),
      seo: () =>
        import(`../locale/${trans}/seo.json`).then((module) => module.default),
    };
  });

  return translations;
};

const translations = generateTranslations();

export const getLocale = async (
  locale: Locale,
  section: TranslationSection,
) => {
  const normalizedLocale = normalizeLocale(locale);
  return translations[normalizedLocale][section]();
};
