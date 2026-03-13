import type { NextConfig } from "next";

const isStaticExport = process.env.EXPORT === "true";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages preview
  ...(isStaticExport && {
    output: "export",
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
    images: { unoptimized: true },
  }),
  images: {
    domains: [],
  },
};

export default nextConfig;
