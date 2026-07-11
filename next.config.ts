import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.nkarla.dev" }],
        destination: "https://nkarla.dev/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
