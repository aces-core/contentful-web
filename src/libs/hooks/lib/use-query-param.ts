import { useSearchParams } from "next/navigation";

export const useQueryParam = () => {
  const searchParams = useSearchParams();

  const getQueryParam = (key: string): string | null => {
    return searchParams.get(key);
  };

  const setQueryParam = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === null) {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", newUrl);
  };

  return { getQueryParam, setQueryParam };
};
