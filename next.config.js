/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    prependData: `@import "@styles/base.module"; @import "@styles/common.mixin";`,
  },
}

module.exports = nextConfig
