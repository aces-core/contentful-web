export const navigateToSearch = (
  query: string,
  navigate: (url: string) => void,
) => {
  if (query.trim()) {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  }
};
