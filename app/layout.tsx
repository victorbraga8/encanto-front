import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HomeScreen from "./components/home/home";
import Header from "./components/header/page";
import Sidebar from "./components/sidebar/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sistema Encanto",
  description: "Roteirizador de Propostas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Sidebar />
      <Header />
      <HomeScreen />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
