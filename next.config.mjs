/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media4.giphy.com",
        pathname:
          "/media/v1.Y2lkPTc5MGI3NjExMWlkdWNndDhneGVqYWwycTd0bWY0MWNvenJjejY0ZnM2OXRtbmdqdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UuAQ71qJ7cQk6NZ99p/giphy.webp",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
