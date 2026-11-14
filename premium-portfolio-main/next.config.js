/** @type {import('next').NextConfig} */
// The site is deployed to GitHub Pages under /premium-portfolio, so every asset
// URL needs this prefix. If you move to a custom domain, set basePath to "".
const basePath = "/premium-portfolio";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: `${basePath}/`,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
