/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ['i.ibb.co'],
  },
  // Removed 'output: export' to enable API routes
  trailingSlash: true,
  // Removed 'distDir: out' as it's not needed for Vercel deployment
};

module.exports = nextConfig;
