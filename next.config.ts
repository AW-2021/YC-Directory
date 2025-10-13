import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
};

export default nextConfig;
