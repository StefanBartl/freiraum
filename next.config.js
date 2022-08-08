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

module.exports = {
  //add other configs here too
  env: {
    PORT: 8080,
    MONGODB: "mongodb+srv,//wkdsteve:020290Ab@freiraum.xvduccp.mongodb.net/?retryWrites=true&w=majority",
    MONGODBFREIRAUM: "mongodb+srv//wkdsteve:020290Ab@freiraum.xvduccp.mongodb.net/FREIraum?retryWrites=true&w=majority"
  }
}