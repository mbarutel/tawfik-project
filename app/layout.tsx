import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tawfik Executive Coaching & Consulting | Melbourne Leadership Development",
  description:
    "Tawfik Executive Coaching & Consulting empowers leaders and executives across Melbourne and Australia with tailored coaching, leadership development, and strategic consulting for lasting success.",
  keywords: [
    "executive coaching Melbourne",
    "leadership coaching",
    "business consulting Melbourne",
    "executive development",
    "leadership training",
    "people and culture consulting",
  ],
  openGraph: {
    title: "Tawfik Executive Coaching & Consulting",
    description:
      "Empowering leaders and executives in Melbourne with tailored coaching, leadership development, and strategic consulting.",
    url: "https://tawfikecc.com.au",
    siteName: "Tawfik Executive Coaching & Consulting",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tawfik Executive Coaching & Consulting",
    description:
      "Melbourne's premier executive coaching and leadership consulting service.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth no-scrollbar">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
