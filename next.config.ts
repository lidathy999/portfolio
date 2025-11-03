import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   // output: "export",
   // reactStrictMode: true,
   transpilePackages: ['@mui/material', '@mui/system', '@mui/icons-material'],
};

export default nextConfig;