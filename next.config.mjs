/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    AZURE_AD_CLIENT_ID: "ddfa597e-e195-489b-80e8-5c4b273e67f6",
    AZURE_AD_CLIENT_SECRET: "nvd8Q~Pi2P~q8XsxcLrOpgmRFCTJpc71_O7DDamd",
    AZURE_AD_TENANT_ID: "e21e0d76-cf85-4728-a5d8-c94ec48156ed",
    NEXT_AUTH_SECRET: "secret",
  },
};

export default nextConfig;
