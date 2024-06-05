/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["tmdb.org", "themoviedb.org"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
