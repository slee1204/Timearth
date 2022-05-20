/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents:true
  }
}

module.exports = {
  images: {
    loader: 'imgix',
    domain: [process.env.CLIENT], // 이미지 도메인
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  nextConfig
}
