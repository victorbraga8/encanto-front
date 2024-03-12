/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    AZURE_AD_CLIENT_ID: "c0156952-5c89-4a77-b881-800ecbd1454d",
    AZURE_AD_CLIENT_SECRET: "5-I8Q~h~9Y97q4iv5X_HU-UKHgO2uciZy3jcKdBa",
    AZURE_AD_TENANT_ID: "e21e0d76-cf85-4728-a5d8-c94ec48156ed",
    NEXT_AUTH_SECRET: "secret",
  },
};

export default nextConfig;
