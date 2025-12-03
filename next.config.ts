import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
  // Ensure static files are properly served
  output: 'standalone',
};

export default nextConfig;
