/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_AUTH0_CLIENT_ID_SANDBOX: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID_SANDBOX,
  },
  async rewrites() {
    return [
      { source: "/bff/:path*", destination: "/api/:path*" },
    ];
  },
};

module.exports = nextConfig;
