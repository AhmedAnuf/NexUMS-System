/** @type {import('next').NextConfig} */

// configuration for pexel images in next js
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
  },
};

export default nextConfig;
