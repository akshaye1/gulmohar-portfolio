import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Standard Unsplash image delivery hostname
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com", // Another Unsplash hostname
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "unsplash.com", // For direct Unsplash links if any (though images.unsplash.com is more common for raw images)
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.mixkit.co", // Added for Mixkit videos
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "experimentoindia.prathamopenschool.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
