const isStaticExport = process.env.EXPORT === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isStaticExport && {
    output: "export",
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
    images: { unoptimized: true },
  }),
  images: {
    domains: [],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://www.letsgowin.com",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
