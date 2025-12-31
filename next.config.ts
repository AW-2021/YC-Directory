import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Letting Next.js know that we can use the placehold.co url as image source
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        pathname: "/**",
      },
    ],
  },
  cacheComponents: true,
  devIndicators: {
    position: "bottom-right",
  },
};

export default nextConfig;
