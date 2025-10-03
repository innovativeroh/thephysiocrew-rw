import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (process.env.NODE_ENV === "production") {
      return config; // stick with Webpack
    }
    return config;
  },

  turbopack: {
    resolveAlias: {}
  }
};

export default nextConfig;
