import { useEffect, useState } from "react";

import { getLocale, Locale, TranslationSection } from "@aces/i18n";

export const useGetLocale = (locale: Locale, section: TranslationSection) => {
  const [t, setT] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchLocale = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await getLocale(locale, section);
        if (isMounted) {
          setT(result);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchLocale();

    return () => {
      isMounted = false;
    };
  }, [locale, section]);

  return { t, loading, error };
};
