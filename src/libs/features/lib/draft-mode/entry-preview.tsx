import { defaultLocale } from "@aces/i18n";
import {
  CfImageOverlayHeroServer,
  CfAccordionsServer,
  CfBannerServer,
  CfCodeEmbedServer,
  CfFormServer,
  CfHeaderServer,
  CfImageServer,
  CfGridServer,
  CfLockupServer,
  CfRichTextSectionServer,
  CfVideoEmbedServer,
} from "@aces/cf";

export const EntriesPreview = ({
  item,
  preview = true,
  lang = defaultLocale,
}: any) => {
  if (item === null) {
    return null;
  }

  const typename = item.__typename;

  switch (typename) {
    case "ImageOverlayHero":
      return (
        <CfImageOverlayHeroServer
          id={item?.sys?.id || ""}
          preview={preview}
          lang={lang}
        />
      );
    case "Accordions":
      return (
        <CfAccordionsServer
          id={item?.sys?.id || ""}
          preview={preview}
          lang={lang}
        />
      );
    case "Banner":
      return (
        <CfBannerServer
          id={item?.sys?.id || ""}
          preview={preview}
          lang={lang}
        />
      );
    case "CodeEmbed":
      return (
        <CfCodeEmbedServer
          id={item?.sys?.id || ""}
          preview={preview}
          lang={lang}
        />
      );
    case "Form":
      return (
        <CfFormServer id={item?.sys?.id || ""} preview={preview} lang={lang} />
      );
    case "Header":
      return (
        <CfHeaderServer
          id={item?.sys?.id || ""}
          preview={preview}
          lang={lang}
        />
      );
    case "Image":
      return (
        <CfImageServer id={item?.sys?.id || ""} preview={preview} lang={lang} />
      );
    case "GridUpdated":
      return (
        <CfGridServer id={item?.sys?.id || ""} preview={preview} lang={lang} />
      );
    case "Lockup":
      return (
        <CfLockupServer
          id={item?.sys?.id || ""}
          preview={preview}
          lang={lang}
        />
      );
    case "RichTextSection":
      return (
        <CfRichTextSectionServer
          id={item?.sys?.id || ""}
          preview={preview}
          lang={lang}
        />
      );
    case "VideoEmbed":
      return (
        <CfVideoEmbedServer
          id={item?.sys?.id || ""}
          preview={preview}
          lang={lang}
        />
      );
    default:
      return null;
  }
};
