// Layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/page";
import Sidebar from "./components/sidebar/page";
import AuthProvider from "./_providers/auth";

import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <Sidebar />
          {/* <div className="flex overflow-hidden">{children}</div> */}
          <div className="flex">{children}</div>
          <Toaster />
        </body>
      </html>
    </AuthProvider>
  );
}
