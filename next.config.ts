import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  allowedDevOrigins: ['vm-debian-webserver', '192.168.0.78', 'localhost', '10.64.132.26'],
  crossOrigin: 'anonymous',
}

export default nextConfig;
