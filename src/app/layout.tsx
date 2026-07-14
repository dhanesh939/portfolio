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
    default: "Dhanesh Patel | Director, Enterprise Customer Intelligence Architecture",
    template: "%s | Dhanesh Patel",
  },
  description:
    "Director-level customer intelligence and martech architecture leader helping enterprise brands design trusted customer data systems across Adobe Experience Cloud, Google, analytics, consent, personalization, and AI-readiness.",
  alternates: {
    canonical: "https://dhaneshpatel.com",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Dhanesh Patel | Director, Enterprise Customer Intelligence Architecture",
    description:
      "Director-level customer intelligence and martech architecture leader helping enterprise brands design trusted customer data systems across Adobe Experience Cloud, Google, analytics, consent, personalization, and AI-readiness.",
    type: "website",
    url: "https://dhaneshpatel.com",
    images: [{ url: "/og-image.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanesh Patel | Director, Enterprise Customer Intelligence Architecture",
    description:
      "Director-level customer intelligence and martech architecture leader helping enterprise brands design trusted customer data systems across Adobe Experience Cloud, Google, analytics, consent, personalization, and AI-readiness.",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NFMKLWH8');`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NFMKLWH8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
