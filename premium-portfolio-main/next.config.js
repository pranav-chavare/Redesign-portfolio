/** @type {import('next').NextConfig} */
// GitHub Pages project-site path for pranav-chavare/Redesign-portfolio.
const basePath = "/Redesign-portfolio";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: `${basePath}/`,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

module.exports = nextConfig;
