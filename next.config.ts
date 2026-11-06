import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "export8inc.vercel.app" }],
        destination: "https://www.export8.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
