import type React from "react";
import "./globals.css";
import AuthProvider, { useAuth } from "@/providers/AuthProvider";
import { Inter } from "next/font/google";
// import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"], // Added 800 for Extra Bold
});

function RootLayoutContent({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <RootLayoutContent>{children}</RootLayoutContent>
    </AuthProvider>
  );
}
