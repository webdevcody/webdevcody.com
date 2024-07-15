/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "public-files.gumroad.com",
      },
    ],
  },
};

export default nextConfig;
