/** @type {import('next').NextConfig} */
const nextConfig = {
  // Default Next.js configuration
  reactStrictMode: true,
  swcMinify: true,
  
  // Environment variables
  env: {
    NEXT_PUBLIC_RESEND_API_KEY: process.env.NEXT_PUBLIC_RESEND_API_KEY,
  },
  
  // For debugging (optional)
  logging: {
    fetches: {
      fullUrl: true
    }
  }
};

// Debug log for environment variables (server-side only)
if (process.env.NEXT_PUBLIC_RESEND_API_KEY) {
  console.log('Resend API Key is set');
} else {
  console.warn('WARNING: NEXT_PUBLIC_RESEND_API_KEY is not set');
}

module.exports = nextConfig;
