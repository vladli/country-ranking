/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rest-countries-gamma.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;
