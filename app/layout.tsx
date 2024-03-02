// Layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HomeScreen from "./(home)/page";
import Header from "./components/header/page";
import Sidebar from "./components/sidebar/page";
import AuthProvider from "./_providers/auth";
import { AppProvider, useAppContext } from "./AppContext";

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
          <div className="flex overflow-hidden">{children}</div>
        </body>
      </html>
    </AuthProvider>
  );
}
