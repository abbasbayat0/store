/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**',
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
        port: '',
      },
      { protocol: 'https', hostname: 'ryjoygwqwacktrgswajj.supabase.co' },
    ],
  },
};

export default nextConfig;
