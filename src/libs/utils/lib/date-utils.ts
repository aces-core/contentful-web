export function formatDate(date: Date | string, locale: string): string {
  const d = new Date(date);

  // Ex: "September 21, 2024"
  return d.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateRange(
  startDate: Date | string,
  endDate: Date | string,
  locale: string,
): string {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Ex: "September 21 - 23, 2024"
  return start.getDate() !== end.getDate()
    ? `${start.toLocaleDateString(locale, {
        month: "long",
      })} ${start.getDate()} - ${end.getDate()}, ${start.getFullYear()}`
    : formatDate(startDate, locale);
}

export function getFullMonthAndDay(date: string, lang: string): string {
  const d = new Date(date);

  return d.toLocaleDateString(lang, {
    month: "long",
    day: "numeric",
  });
}

export function getFullYear(date: string): string {
  const d = new Date(date);
  const offset = d.getTimezoneOffset() * 60000;
  const localDate = new Date(d.getTime() - offset);

  return localDate.getFullYear().toString();
}

export function currentYear(): number {
  return new Date().getFullYear();
}
