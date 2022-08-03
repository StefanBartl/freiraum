/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

rewrites: async () => [
  {
    source: "/public/dir/index.html",
    destination: "/pages/api/myfile.js",
  },
]