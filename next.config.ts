import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // pageExtensions: [
  //   "page.tsx",
  //   "page.ts",
  //   // FIXME: Next.js has a bug which does not resolve not-found.page.tsx correctly
  //   // Instead, use `not-found.ts` as a workaround
  //   // "ts" is required to resolve `not-found.ts`
  //   // https://github.com/vercel/next.js/issues/65447
  //   "ts",
  // ],
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ["src/stories"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "downloads.ctfassets.net",
        port: "",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
