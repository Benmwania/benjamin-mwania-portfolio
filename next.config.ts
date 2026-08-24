import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    // Required for Netlify Forms with Next.js 16
  },
}

export default nextConfig