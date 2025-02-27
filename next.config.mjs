const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "/neil.dev/" : "",
  basePath: isProd ? "/neil.dev" : "",
  output: "export",
};

export default nextConfig;
