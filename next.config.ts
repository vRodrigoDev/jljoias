import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.rommanel.com.br",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "catalogopersonalizado.rommanel.com.br",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;