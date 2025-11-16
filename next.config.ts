import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable remote images from Figma for the Learn page hero
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.figma.com",
        pathname: "/api/mcp/asset/**",
      },
    ],
  },
};

export default nextConfig;
