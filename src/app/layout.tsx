import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { draftMode } from "next/headers";
import { GoogleTagManager } from "@next/third-parties/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";

import { defaultLocale, getLocale } from "@maverick/i18n";
import { palette, theme } from "@maverick/theme";
import { DraftModeBar, HeaderServer } from "@maverick/features";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

export async function generateMetadata({
  params: { lang = defaultLocale },
}: Readonly<{
  children: React.ReactNode;
  params: { lang?: string };
}>): Promise<Metadata> {
  const t = await getLocale(lang, "seo");

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
    title: {
      template: `%s | ${t.siteTemplate}`,
      default: t.defaultTitle,
    },
  };
}

export default async function RootLayout({
  children,
  params: { lang = defaultLocale },
}: Readonly<{
  children: React.ReactNode;
  params: { lang?: string };
}>) {
  const { isEnabled } = await draftMode();
  const appId = process.env.NEXT_PUBLIC_CF_APP_ID || "";

  return (
    <html lang={lang}>
      {process.env.NEXT_PUBLIC_CF_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_CF_GTM_ID} />
      )}
      <body style={{ backgroundColor: palette.background.default }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <HeaderServer id={appId} preview={isEnabled} lang={lang} />
            <main>{children}</main>
            {/* <FooterServer id={appId} preview={isEnabled} lang={lang} /> */}
            {isEnabled && <DraftModeBar />}
          </ThemeProvider>
        </AppRouterCacheProvider>
        {isEnabled && <Script src={`/scripts/${lang}.mjs`} />}
      </body>
    </html>
  );
}
