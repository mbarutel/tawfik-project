import { Header } from "@/components";
import ProfileContent from "@/sections/profile-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Marcus Tawfik - Executive Coach Profile | Tawfik Executive Coaching & Consulting",
  description:
    "Learn about Marcus Tawfik, an executive coach with 15+ years of senior leadership experience specializing in early-stage leadership development in Melbourne and across Australia.",
  keywords: [
    "Marcus Tawfik",
    "executive coach Melbourne",
    "leadership development",
    "executive coaching profile",
    "senior leadership experience",
    "early-stage leadership",
  ],
  openGraph: {
    title: "Marcus Tawfik - Executive Coach Profile",
    description:
      "Executive coach with 15+ years of senior leadership experience, specializing in early-stage leadership development.",
    url: "https://tawfikecc.com.au/profile",
    siteName: "Tawfik Executive Coaching & Consulting",
    locale: "en_AU",
    type: "profile",
  },
};

export default function ProfilePage() {
  return (
    <>
      <Header />
      <ProfileContent />
    </>
  );
}
