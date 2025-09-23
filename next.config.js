/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  transpilePackages: ['framer-motion'],
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'space.coze.cn',
        port: '',
        pathname: '/api/**',
      },
      {
        protocol: 'https',
        hostname: 'lf-code-agent.coze.cn',
        port: '',
        pathname: '/obj/**',
      },
    ],
  },
}

module.exports = nextConfig
