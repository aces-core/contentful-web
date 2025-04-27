import {
  CfAccordionsServer,
  CfBannerServer,
  CfCodeEmbedServer,
  CfFormServer,
  CfHeaderServer,
  CfImageServer,
  CfGridServer,
  CfLockupServer,
  CfRichTextSectionServer,
  CfServicesServer,
  CfVideoEmbedServer,
  CfTestimonialsServer,
  CfTeamListingServer,
  CfCalloutServer,
} from "@aces/cf";

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
          case "CodeEmbed":
            return (
              <CfCodeEmbedServer
                id={item?.sys?.id || ""}
                preview={preview}
                lang={lang}
                key={index}
              />
            );
          case "Form":
            return (
              <CfFormServer
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
          case "GridUpdated":
            return (
              <CfGridServer
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
          case "Services":
            return (
              <CfServicesServer
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
          case "Testimonials":
            return (
              <CfTestimonialsServer
                id={item?.sys?.id || ""}
                preview={preview}
                lang={lang}
                key={index}
              />
            );
          case "TeamListing":
            return (
              <CfTeamListingServer
                id={item?.sys?.id || ""}
                preview={preview}
                lang={lang}
                key={index}
              />
            );
          case "Callout":
            return (
              <CfCalloutServer
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
