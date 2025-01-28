import {
  CfAccordionsServer,
  CfBannerServer,
  CfCardSliderServer,
  CfHeaderServer,
  CfImageServer,
  CfLockupServer,
  CfRichTextSectionServer,
  CfVideoEmbedServer,
} from "@maverick/cf";

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
          case "Accordions":
            return (
              <CfAccordionsServer
                id={item?.sys?.id || ""}
                preview={preview}
                lang={lang}
                key={index}
              />
            );
          case "Banner":
            return (
              <CfBannerServer
                id={item?.sys?.id || ""}
                preview={preview}
                lang={lang}
                key={index}
              />
            );
          case "CardSlider":
            return (
              <CfCardSliderServer
                id={item?.sys?.id || ""}
                preview={preview}
                lang={lang}
                key={index}
              />
            );
          case "Header":
            return (
              <CfHeaderServer
                id={item?.sys?.id || ""}
                preview={preview}
                lang={lang}
                key={index}
              />
            );
          case "Image":
            return (
              <CfImageServer
                id={item?.sys?.id || ""}
                preview={preview}
                lang={lang}
                key={index}
              />
            );
          case "Lockup":
            return (
              <CfLockupServer
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
          case "VideoEmbed":
            return (
              <CfVideoEmbedServer
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
