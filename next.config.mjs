/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "public-files.gumroad.com",
      },
      {
        protocol: "https",
        hostname: "projectplannerai.com",
      },
      {
        protocol: "https",
        hostname: "icongeneratorai.com",
      },
    ],
  },
};

export default nextConfig;
