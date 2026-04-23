/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
  },
  transpilePackages: ['sanity', 'next-sanity', '@sanity/ui', '@sanity/icons', 'styled-components'],
};

module.exports = nextConfig;
