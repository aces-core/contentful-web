import { Document } from "@contentful/rich-text-types";

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

export const estimateReadTime = (
  richTextJson: Document,
  wordsPerMinute = 225,
) => {
  function extractText(node: any) {
    if (!node) return "";
    if (node.nodeType === "text") return node.value;
    if (node.content) return node.content.map(extractText).join(" ");
    return "";
  }

  const text = extractText(richTextJson);
  const wordCount = text
    .split(/\s+/)
    .filter((word: string) => word.length > 0).length;
  const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute);

  return { wordCount, readTimeMinutes };
};
