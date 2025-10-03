import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (process.env.NODE_ENV === "production") {
      return config; // stick with Webpack
    }
    return config;
  },

  images: {
    domains: ['techsolaceconnects.s3.ap-south-1.amazonaws.com']
  },

  turbopack: {
    resolveAlias: {}
  }
};

export default nextConfig;
