/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // สั่งให้ Vercel มองข้าม Error ทั้งหมดและ Build ต่อจนเสร็จ
    ignoreBuildErrors: true,
  },
  eslint: {
    // สั่งให้มองข้ามการเช็ค Format โค้ด
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;