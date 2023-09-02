/** @type {import('next').NextConfig} */
// const withImages = require('next-images');
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/sounds/",
          outputPath: "static/sounds/",
          name: "[name].[ext]",
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
