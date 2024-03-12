/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    AZURE_AD_CLIENT_ID: "2965b143-82d0-4c53-9667-263b0fc5a202",
    AZURE_AD_CLIENT_SECRET: "JQm8Q~iQmvWFlhvkYNFbHgZatddS3fuy3DxVRdzh",
    AZURE_AD_TENANT_ID: "7ef724cb-3c77-4b44-90bd-1a48e265ad86",
    NEXT_AUTH_SECRET: "secret",
  },
};

export default nextConfig;
