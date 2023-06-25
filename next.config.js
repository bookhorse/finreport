/** @type {import('next').NextConfig} */

const isDemo = !!process.env.PRODUCE_DEMO;
const demoRoot = '/finreport/gitpages/demo';

const nextConfig = {
  output: 'export',
  basePath: isDemo? demoRoot : '',
  assetPrefix: isDemo? demoRoot : '',
  reactStrictMode: true,
  webpack: (config, _options) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
