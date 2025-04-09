/* eslint-disable no-undef */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    loader: "custom",
    domains: ["images.ctfassets.net"],
  },
});
