import type { NextConfig } from "next";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const appDirectory = dirname(fileURLToPath(import.meta.url));
const workspaceRoot = join(appDirectory, "..");
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
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
  outputFileTracingRoot: workspaceRoot,
  transpilePackages: ["nextjs-trackkit"],
  turbopack: {
    root: workspaceRoot,
  },
};

export default nextConfig;
