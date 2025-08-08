/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ['i.ibb.co'],
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
};

module.exports = nextConfig;
