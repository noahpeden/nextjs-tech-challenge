/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,

      fs: false,
    };

    return config;
  },
  images: {
    domains: ['s7d2.scene7.com'],
  },
};

module.exports = nextConfig;
