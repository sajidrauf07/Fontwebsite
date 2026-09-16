/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbopack: false,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.theletrasbonitas.com' }],
        destination: 'https://theletrasbonitas.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
