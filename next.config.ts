import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["contentful"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "downloads.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "www.clipartmax.com",
      },
    ],
  },
};

export default nextConfig;
