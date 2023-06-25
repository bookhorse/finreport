/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const demoRoot = '/finreport/demo';

const nextConfig = {
  output: 'export',
  basePath: isGithubActions? demoRoot : '',
  assetPrefix: isGithubActions? demoRoot : '',
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
