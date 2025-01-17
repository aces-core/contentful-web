export const cfCollectionToSelectOptions = <T>(
  collection: T[],
  valueField: keyof T,
  labelField: keyof T,
): {
  value: string;
  label: string;
}[] =>
  collection.map((item) => ({
    value: String(item[valueField]),
    label: String(item[labelField]),
  }));
