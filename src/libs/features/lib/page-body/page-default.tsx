import { CfImageServer, CfRichTextSectionServer } from "@maverick/cf";

import { PageBodyProps } from "./page-body-types";

export const DefaultPageBody = ({ items, preview, lang }: PageBodyProps) => {
  if (!items) {
    return null;
  }

  return (
    <>
      {items.map((item, index) => {
        const typename = item.__typename;

        if (!typename) {
          return null;
        }

        switch (typename) {
          case "Image":
            return (
              <CfImageServer
                id={item?.sys?.id || ""}
                preview={preview}
                lang={lang}
                key={index}
              />
            );
          case "RichTextSection":
            return (
              <CfRichTextSectionServer
                id={item?.sys?.id || ""}
                preview={preview}
                lang={lang}
                key={index}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
};
