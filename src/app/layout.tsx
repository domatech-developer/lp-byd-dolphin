import "@/scss/main.scss";
import QueryProvider from "@/provider/QueryProvider/QueryProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.webp", sizes: "16x16", type: "image/webp" },
      { url: "/favicon/favicon-32x32.webp", sizes: "32x32", type: "image/webp" },
      { url: "/favicon/android-chrome-192x192.webp", sizes: "192x192", type: "image/webp" },
      { url: "/favicon/android-chrome-512x512.webp", sizes: "512x512", type: "image/webp" }
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.webp"
  }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
