import "./globals.css";

import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";

import { cn } from "@/lib/utils";
import ReactQueryProviders from "@/components/provider/tanstack-query-provider";
import AuthDialog from "@/components/auth-dialog";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontHeading = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description:
    "Discover a supportive community where collaboration, mentorship, and shared knowledge fuel your journey to becoming a better developer",
  metadataBase: new URL("https://next-supabase-vote.vercel.app/"),

  title: {
    template: "%s | DWC",
    default: "DWC",
  },
  authors: {
    name: "chensokheng",
  },
  openGraph: {
    title: "DWC",
    description:
      "Discover a supportive community where collaboration, mentorship, and shared knowledge fuel your journey to becoming a better developer",
    url: "https://dwc-saas-template.vercel.app/",
    siteName: "DWCs' community",
    images: "/images/og.png",
    type: "website",
  },
  keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <ReactQueryProviders>
          <main>
            {children}
            <AuthDialog />
          </main>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
