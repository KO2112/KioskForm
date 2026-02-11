import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: "/:path*",
        destination: "https://cabinunits.co.uk/:path*",
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
