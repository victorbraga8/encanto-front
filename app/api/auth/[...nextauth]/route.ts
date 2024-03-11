import NextAuth from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

const handler = NextAuth({
  providers: [
    AzureADProvider({
      clientId: "cb53228b-5ac1-4c44-bea1-cc7d73b82d6c",
      clientSecret: ".4R8Q~x1O5JbR.EBtEP_E.MV1lN2GdgX-QhIVdhh",
      // clientId: "c69c5892-8501-4622-955f-2cb696dca018",
      // clientSecret: "FPV8Q~izBHxLzhGx7iQszV046J1c3Vw~Cwi4nb2i",
      tenantId: "e21e0d76-cf85-4728-a5d8-c94ec48156ed",
    }),
  ],
});

export { handler as GET, handler as POST };
