import type {NextConfig} from "next";
// Keep production builds from replacing a running development server's assets.
const nextConfig:NextConfig={distDir:process.env.NODE_ENV==="development"?".next-dev":".next"};
export default nextConfig;
