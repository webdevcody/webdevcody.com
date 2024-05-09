/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "public-files.gumroad.com",
      },
    ],
  },
};

export default nextConfig;
