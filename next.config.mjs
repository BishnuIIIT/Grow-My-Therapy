/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
      {
        protocol: "http",
        hostname: "static1.squarespace.com",
      },
      {
        protocol: "https",
        hostname: "static1.squarespace.com",
      },
    ],
  },
};

export default nextConfig;
