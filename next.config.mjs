/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed ignoreBuildErrors for production readiness
  // Fix TypeScript errors before deploying
  images: {
    unoptimized: true, // Set to false if you want Next.js image optimization
  },
}

export default nextConfig
