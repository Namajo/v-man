import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  allowedDevOrigins: ['vm-debian-webserver', '192.168.0.78'],
  crossOrigin: 'anonymous',
}

export default nextConfig;
