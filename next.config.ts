import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
