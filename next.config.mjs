/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "images.squarespace-cdn.com",
      "cdn.prod.website-files.com",
      "media.licdn.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};
export default nextConfig;
