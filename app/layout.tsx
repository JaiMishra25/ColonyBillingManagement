import type React from "react";
import { NotificationProvider } from "@/components/notification-provider";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Annapurna Badavane Association",
  description: "Monthly maintenance bill generating portal",
  generator: "v0.dev",
  manifest: "/manifest.json",
  icons: [
    { rel: "icon", url: "/icons/favicon.ico" },
    { rel: "apple-touch-icon", url: "/icons/apple-touch-icon.png" },
    { rel: "icon", url: "/icons/android-chrome-192x192.png", sizes: "192x192" },
    { rel: "icon", url: "/icons/android-chrome-512x512.png", sizes: "512x512" },
  ],
};

export const viewport = {
  themeColor: "#ffffff",  // Move themeColor here
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="icon" href="/icons/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </head>

      <body>
        <NotificationProvider>
          {children}
          <Toaster />
        </NotificationProvider>
      </body>
    </html>
  );
}
