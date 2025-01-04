import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'apple-summary-slides-images.b-cdn.net',
      },
    ],
  },
};

export default nextConfig;
