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
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96],
    path: '/_next/image',
    loader: 'default',
  },
};

module.exports = nextConfig;
