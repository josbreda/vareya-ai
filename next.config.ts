import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strict TypeScript in production
  typescript: {
    ignoreBuildErrors: false,
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },

  // Redirect www to apex
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.vareya.ai" }],
        destination: "https://vareya.ai/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
