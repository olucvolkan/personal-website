/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static HTML Export
  images: {
    unoptimized: true, // Required for static export
  },
  // Cloudflare Pages specific configuration
  trailingSlash: true,
}

module.exports = nextConfig 