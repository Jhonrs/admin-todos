import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns:[
      {
        protocol: "https",
        hostname: "tailus.io"
      },
       {
        protocol: "https",
        hostname: "alt.tailus.io"
      },
       {
        protocol: "https",
        hostname: "avatars.githubusercontent.com"
      },
       {
        protocol: "https",
        hostname: "lh3.googleusercontent.com"
      },
    ]
  }
};

export default nextConfig;
