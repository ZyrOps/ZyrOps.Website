import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blogs.zyrops.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.zyrops.com",
          },
        ],
        destination: "https://zyrops.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
