import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {},
    },
  },
  webpack(config, { isServer }) {
    if (process.env.NODE_ENV === "production") {
      return config; // stick with Webpack
    }
    return config;
  },
};

export default nextConfig;
