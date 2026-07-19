import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  transpilePackages: ["nextjs-trackkit"],
  ...(isGitHubPages
    ? {
        assetPrefix: "/trackkit",
        basePath: "/trackkit",
        output: "export" as const,
        trailingSlash: true,
      }
    : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
