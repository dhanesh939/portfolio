import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dhaneshpatel.com"),
  title: {
    default: "Dhanesh Patel | Enterprise Customer Intelligence Architect",
    template: "%s | Dhanesh Patel",
  },
  description:
    "Dhanesh Patel helps enterprise brands design trusted customer data systems across Adobe, Google, analytics, consent, personalization, and AI-readiness.",
  openGraph: {
    title: "Dhanesh Patel | Enterprise Customer Intelligence Architect",
    description:
      "Dhanesh Patel helps enterprise brands design trusted customer data systems across Adobe, Google, analytics, consent, personalization, and AI-readiness.",
    type: "website",
    url: "https://dhaneshpatel.com",
    images: [{ url: "/og-image.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanesh Patel | Enterprise Customer Intelligence Architect",
    description:
      "Dhanesh Patel helps enterprise brands design trusted customer data systems across Adobe, Google, analytics, consent, personalization, and AI-readiness.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
