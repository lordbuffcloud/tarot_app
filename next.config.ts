import type { NextConfig } from "next";
import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development", // Disable PWA in development
  // register: true, // Auto register service worker
  // skipWaiting: true, // Auto skip waiting phase
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default withPWA(nextConfig as any);
