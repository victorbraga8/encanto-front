import NextAuth from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

const handler = NextAuth({
  providers: [
    AzureADProvider({
      clientId: "2965b143-82d0-4c53-9667-263b0fc5a202",
      clientSecret: "ubo8Q~SSmDT7IEEYoQ0l7cXg9~H1uC0k~BcsFbYN",
      // clientId: "c69c5892-8501-4622-955f-2cb696dca018",
      // clientSecret: "FPV8Q~izBHxLzhGx7iQszV046J1c3Vw~Cwi4nb2i",
      tenantId: "7ef724cb-3c77-4b44-90bd-1a48e265ad86",
    }),
  ],
});

export { handler as GET, handler as POST };
