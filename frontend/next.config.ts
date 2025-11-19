import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use webpack instead of Turbopack to avoid module parsing issues with dependencies
  webpack: (config) => {
    // Ignore problematic files from node_modules
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/node_modules/thread-stream/test/**'],
    };
    
    return config;
  },
};

export default nextConfig;
