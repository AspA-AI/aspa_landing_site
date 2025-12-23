/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Environment variables to be exposed to the browser
  env: {
    NEXT_PUBLIC_RESEND_API_KEY: process.env.NEXT_PUBLIC_RESEND_API_KEY,
  },
  
  // Add any other Next.js configuration options here
};

// Debug log for environment variables (server-side only)
if (process.env.NEXT_PUBLIC_RESEND_API_KEY) {
  console.log('Resend API Key is set');
} else {
  console.warn('WARNING: NEXT_PUBLIC_RESEND_API_KEY is not set');
}

module.exports = nextConfig;
