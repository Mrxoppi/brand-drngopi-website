import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages project site: /drngopi-personal-brand
  // Remove basePath if using custom domain or user pages
  basePath: isProd ? "/drngopi-personal-brand" : "",
  assetPrefix: isProd ? "/drngopi-personal-brand/" : "",
};

export default nextConfig;
