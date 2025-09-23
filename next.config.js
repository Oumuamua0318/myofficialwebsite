/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['framer-motion'],
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  images: {
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
