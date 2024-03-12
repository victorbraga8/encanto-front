import NextAuth from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

const clientIdAd = process.env.AZURE_AD_CLIENT_ID;
const clientSecret = process.env.AZURE_AD_CLIENT_SECRET;
const tenantId = process.env.AZURE_AD_TENANT_ID;

if (!clientIdAd || !clientSecret || !tenantId) {
  throw new Error("Azure AD client ID not provided.");
}

const handler = NextAuth({
  providers: [
    AzureADProvider({
      clientId: clientIdAd,
      clientSecret: clientSecret,
      tenantId: tenantId,
    }),
  ],
  secret: "secret",
});

export { handler as GET, handler as POST };
