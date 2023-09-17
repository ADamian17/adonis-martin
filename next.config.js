/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: ['styles'],
  },
  images: {
    domains: ['images.ctfassets.net'],
    minimumCacheTTL: 1500000,
  },
};

module.exports = nextConfig;
