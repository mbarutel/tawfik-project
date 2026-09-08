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
  title: "Tawfik Executive Coaching | Melbourne Leadership Development",
  description:
    "Executive coaching and team workshops for new and emerging leaders. Practical, evidence-based leadership development across Melbourne, Gippsland and Australia.",
  keywords: [
    "executive coaching Melbourne",
    "leadership coaching Victoria",
    "coaching for new managers",
    "emerging leader coaching Australia",
    "leadership team workshops",
    "psychological safety workshop",
  ],
  openGraph: {
    title: "Tawfik Executive Coaching",
    description:
      "Executive coaching and team workshops for new and emerging leaders across Melbourne, Gippsland and Australia.",
    url: "https://tawfikecc.com.au",
   siteName: "Tawfik Executive Coaching",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
   title: "Tawfik Executive Coaching",
   description:
      "Practical, evidence-based leadership development through executive coaching and team workshops.",
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
