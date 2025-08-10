/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ttf|html)$/i,
      type: 'asset/resource',
    });
    return config;
  },
  experimental: {
    serverMinification: false, // this keeps your class names from breaking
  },
};

module.exports = nextConfig;
