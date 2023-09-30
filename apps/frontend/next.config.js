/** @type {import('next').NextConfig} */
const path = require("path")
// eslint-disable-next-line import/no-extraneous-dependencies
const CopyPlugin = require("copy-webpack-plugin")

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // eslint-disable-next-line no-unused-vars
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.join(__dirname, "node_modules/tinymce"),
            to: path.join(__dirname, "public/assets/libs/tinymce")
          }
        ]
      })
    )
    return config
  }
}

module.exports = nextConfig
